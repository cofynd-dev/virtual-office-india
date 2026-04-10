#!/usr/bin/env node
/**
 * Prints LAN URLs for testing on a phone (same Wi‑Fi as this computer).
 * Used by: npm run dev:mobile
 */
import os from "node:os";

const port = process.env.PORT || "4028";
const nets = os.networkInterfaces();
const ips = [];

for (const name of Object.keys(nets)) {
  for (const net of nets[name] ?? []) {
    if (net.family === "IPv4" && !net.internal) {
      ips.push(net.address);
    }
  }
}

console.log("");
console.log("  Mobile / LAN preview (same Wi‑Fi as this machine)");
console.log("  ─────────────────────────────────────────────────");
if (ips.length === 0) {
  console.log("  No non-local IPv4 found. Connect to Wi‑Fi or VPN, then retry.");
} else {
  for (const ip of ips) {
    const base = `http://${ip}:${port}`;
    console.log(`  ${base}`);
    console.log(`  ${base}/homepage`);
  }
}
console.log("");
console.log("  Tip: Chrome desktop → toggle device toolbar (Cmd+Shift+M) for quick checks.");
console.log("");
