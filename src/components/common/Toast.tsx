import React, { useEffect } from 'react';
import { Toast as ToastType } from '../../types';
import { useNotification } from '../../hooks/useNotification';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import '../styles/common.css';

interface ToastProps {
  toast: ToastType;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  const { removeToast } = useNotification();

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast, removeToast]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      case 'warning':
        return <AlertCircle size={20} />;
      default:
        return <Info size={20} />;
    }
  };

  return (
    <div className={`toast toast-${toast.type}`}>
      <div className="toast-content">
        {getIcon()}
        <p>{toast.message}</p>
      </div>
      <button
        className="toast-close"
        onClick={() => removeToast(toast.id)}
      >
        <X size={16} />
      </button>
    </div>
  );
};
