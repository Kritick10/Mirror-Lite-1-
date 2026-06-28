function analyzeIdea() {
  let idea = document.getElementById("idea").value;

  if (!idea) {
    alert("Please enter an idea");
    return;
  }

  let result = `
⚠️ Risk Level: High

🔴 Weak Points:
- No clear user acquisition plan
- High competition
- Execution difficulty is high

🚧 Bottleneck:
Getting first users

💡 Fix Suggestions:
- Start with small niche
- Reduce features
- Test manually first

🚀 Improved Idea:
Simplify your idea into a small MVP version before scaling.
`;

  document.getElementById("result").innerText = result;
}
