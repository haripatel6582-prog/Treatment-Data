document.addEventListener("DOMContentLoaded", () => {
  const blockCount = 3; // Example: 3 blocks, replace with dynamic later
  const tbody = document.querySelector("#blocksTable tbody");
  const symbols = ["★", "●", "▲", "■", "♦"];

  for (let i = 1; i <= blockCount; i++) {
    const row = document.createElement("tr");

    // Block No.
    const blockCell = document.createElement("td");
    blockCell.textContent = "Block " + i;
    row.appendChild(blockCell);

    // Symbol dropdown
    const symbolCell = document.createElement("td");
    const select = document.createElement("select");
    symbols.forEach(sym => {
      const opt = document.createElement("option");
      opt.value = sym;
      opt.textContent = sym;
      select.appendChild(opt);
    });
    symbolCell.appendChild(select);
    row.appendChild(symbolCell);

    // Vigat input
    const vigatCell = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "વિગત લખો";
    vigatCell.appendChild(input);
    row.appendChild(vigatCell);

    tbody.appendChild(row);
  }
});
