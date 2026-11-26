import { mkdirSync, writeFileSync } from "node:fs";

// The Router Confesses — one line, under 200 characters.
// The router is a coward: its LEDs fainted when the killer stepped out.
const line = "Sorry I flatlined during the reveal—my little green LEDs saw the killer step out and fainted; I'm not a router, I'm a coward with antennas.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
