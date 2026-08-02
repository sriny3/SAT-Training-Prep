@echo off
REM SAT Prep Platform - Push to GitHub Script

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║          SAT Prep Platform - GitHub Upload                    ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Navigate to project directory
cd /d "%~dp0"
echo Current directory: %cd%
echo.

REM Check if git is installed
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ ERROR: Git is not installed!
    echo Please download from: https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✓ Git is installed
echo.

REM Initialize git repository
if not exist .git (
    echo Initializing git repository...
    git init
    echo ✓ Git initialized
) else (
    echo ✓ Git repository already exists
)
echo.

REM Add all files
echo Adding files to git...
git add .
echo ✓ Files added
echo.

REM Create initial commit
echo Creating initial commit...
git commit -m "SAT Prep Platform - Complete Application

- Phase 1-4: All features implemented
- 45 interactive lessons
- 8 quizzes with scoring
- 4 practice tests with timer
- Gamification system (points, badges, levels)
- Leaderboard
- Progress analytics
- Responsive design"
echo ✓ Commit created
echo.

REM Instructions for pushing
echo.
echo ════════════════════════════════════════════════════════════════
echo NEXT STEPS - Follow these commands in order:
echo ════════════════════════════════════════════════════════════════
echo.
echo 1. Create a new repository on GitHub:
echo    Go to: https://github.com/new
echo    Repository name: sat-prep-platform
echo    Description: SAT/PSAT Prep Platform
echo    Click: Create repository
echo.
echo 2. Copy the commands from GitHub (looks like):
echo    git remote add origin https://github.com/sriny3/sat-prep-platform.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Paste and run those commands here
echo.
echo ════════════════════════════════════════════════════════════════
echo.
pause

echo.
echo Waiting for you to create repository and copy commands...
echo Paste the GitHub commands (starting with git remote add origin)
echo and press Enter when done.
echo.

REM Ready to push
echo.
echo Local repository is ready!
echo Git log shows:
git log --oneline -1
echo.
echo Now go to GitHub and create a new repository named "sat-prep-platform"
echo Then paste the commands from GitHub into this terminal.
echo.
pause
