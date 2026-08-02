import re

# Read the file
with open('math.ts', 'r') as f:
    content = f.read()

# Update algebra lesson 1 (already correct)
old1 = "practiceQuestions: \['q-algebra-c-001', 'q-algebra-c-002'," 
new1 = "practiceQuestions: ['lesson-alg-exp-001-q01', 'lesson-alg-exp-001-q02',"
# This is more complex, let me do it more carefully

# Better approach: find and replace by section
# Let me read and parse properly

with open('math.ts', 'r') as f:
    lines = f.readlines()

output = []
i = 0
while i < len(lines):
    line = lines[i]
    
    # Check if this is a practiceQuestions line for algebra-001
    if "id: 'lesson-algebra-001'" in line:
        # Collect until we find practiceQuestions
        output.append(line)
        i += 1
        while i < len(lines) and "practiceQuestions:" not in lines[i]:
            output.append(lines[i])
            i += 1
        
        # Now replace the practiceQuestions line
        if i < len(lines):
            q1_questions = ["'lesson-alg-exp-001-q{:02d}'".format(j) for j in range(1, 21)]
            new_line = "    practiceQuestions: [" + ", ".join(q1_questions) + "],\n"
            output.append(new_line)
            i += 1
            # Skip old practiceQuestions lines until we find estimatedReadTime
            while i < len(lines) and "estimatedReadTime" not in lines[i]:
                i += 1
    else:
        output.append(line)
        i += 1

with open('math.ts', 'w') as f:
    f.writelines(output)

print("Updated algebra-001")
