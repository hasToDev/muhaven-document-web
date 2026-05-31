import{c as n,Q as s,j as e,m as t}from"./chunks/framework.BPKcPtvA.js";const u=JSON.parse(`{"title":"OpenClaw — phone-first playbook","description":"Real scenarios for driving MuHaven from Telegram while you're on the move.","frontmatter":{"title":"OpenClaw — phone-first playbook","description":"Real scenarios for driving MuHaven from Telegram while you're on the move."},"headers":[],"relativePath":"openclaw/playbook.md","filePath":"openclaw/playbook.md","lastUpdated":1778983454000}`),p={name:"openclaw/playbook.md"};function i(o,a,l,r,c,d){return s(),e("div",null,[...a[0]||(a[0]=[t(`<div class="warning custom-block"><p class="custom-block-title">🚧 In development — not in the Testing Guide</p><p>This surface is still being hardened and isn&#39;t part of the judge/user <a href="/guide/">Testing Guide</a>. The page below describes the intended design. To evaluate MuHaven today, use <a href="/havenbot/overview">HavenBot</a> or the <a href="/mcp/overview">MCP server</a>.</p></div><h1 id="openclaw-telegram-playbook" tabindex="-1">OpenClaw + Telegram playbook <a class="header-anchor" href="#openclaw-telegram-playbook" aria-label="Permalink to &quot;OpenClaw + Telegram playbook&quot;">​</a></h1><p>A library of <strong>phone-first scenarios</strong> — each one shows the actual Telegram chat from start to settled, so you know what to expect before you&#39;re standing on a train platform trying to remember the command name.</p><blockquote><p>Throughout this page, <code>&lt;TOKEN&gt;</code> and <code>RWA1</code> stand in for whichever active RWA token you hold. Your <code>/tokens</code> command lists what&#39;s currently in your catalog.</p></blockquote><h2 id="_1-morning-commute-—-portfolio-check-claim-if-anything-ripe" tabindex="-1">1. Morning commute — portfolio check + claim if anything ripe <a class="header-anchor" href="#_1-morning-commute-—-portfolio-check-claim-if-anything-ripe" aria-label="Permalink to &quot;1. Morning commute — portfolio check + claim if anything ripe&quot;">​</a></h2><p>You&#39;re on the train. You want a quick pulse on the portfolio and, if there&#39;s any pending yield, claim it before you get to the office.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /portfolio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → 🪙 You hold 3 RWA tokens.</span></span>
<span class="line"><span>                  Status: balanced · last sync 09:08 UTC</span></span>
<span class="line"><span>                  Pending yield this week: $14.20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → What&#39;s claimable right now?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → 1 claim available:</span></span>
<span class="line"><span>                  • &lt;TOKEN&gt; epoch 7 — $14.20 (encrypted)</span></span>
<span class="line"><span>                  Use /claim &lt;TOKEN&gt; 7 to claim.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → /claim &lt;TOKEN&gt; 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → Claim &lt;TOKEN&gt; yield for epoch 7?</span></span>
<span class="line"><span>                  Estimated payout: $14.20 (encrypted)</span></span>
<span class="line"><span>                  Tier: Inline (claim is fee-bearing pull)</span></span>
<span class="line"><span>                  [✅ Confirm]  [❌ Cancel]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap ✅ Confirm)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ✅ Claimed. Tx: 0xabc... (View on Arbiscan)</span></span></code></pre></div><p>No browser, no laptop, no passkey ceremony.</p><h2 id="_2-claim-from-bed-—-overnight-yield-notification" tabindex="-1">2. Claim from bed — overnight yield notification <a class="header-anchor" href="#_2-claim-from-bed-—-overnight-yield-notification" aria-label="Permalink to &quot;2. Claim from bed — overnight yield notification&quot;">​</a></h2><p>You set up notifications. The bot pings you when a new epoch finalizes and there&#39;s yield to claim. You roll over, tap, sleep.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@muhaven_bot → 🔔 New yield ready</span></span>
<span class="line"><span>                  &lt;TOKEN&gt; epoch 8 just finalized.</span></span>
<span class="line"><span>                  Your share: ~$12.80 (encrypted)</span></span>
<span class="line"><span>                  Tap to claim:</span></span>
<span class="line"><span>                  [💰 Claim now]   [⏰ Remind me tomorrow]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap 💰 Claim now)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → Claim &lt;TOKEN&gt; yield for epoch 8?</span></span>
<span class="line"><span>                  Tier: Inline (≤$200)</span></span>
<span class="line"><span>                  [✅ Confirm]  [❌ Cancel]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap ✅ Confirm)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ✅ Claimed. Goodnight 🌙</span></span></code></pre></div><p>The notification message bundles the next step&#39;s button, so the whole flow is two taps and never leaves the conversation.</p><h2 id="_3-mid-tier-buy-on-the-train-—-mini-app-otp" tabindex="-1">3. Mid-tier buy on the train — Mini App + OTP <a class="header-anchor" href="#_3-mid-tier-buy-on-the-train-—-mini-app-otp" aria-label="Permalink to &quot;3. Mid-tier buy on the train — Mini App + OTP&quot;">​</a></h2><p>A $1,000 buy lands in tier 2 (Mini-App OTP). You&#39;re on the train; you have wifi but want the extra friction step before signing.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /buy 1000 &lt;TOKEN&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → You&#39;re about to buy 1,000 mhUSDC of &lt;TOKEN&gt;.</span></span>
<span class="line"><span>                  Quote: ~996.5 shares @ NAV $1.003</span></span>
<span class="line"><span>                  Tier:  Mini-App OTP ($200–$5K)</span></span>
<span class="line"><span>                  OTP: 184329 (valid 5 minutes)</span></span>
<span class="line"><span>                  [📱 Open Mini App]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap 📱 Open Mini App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(Mini App opens inside Telegram, shows the same quote + an OTP input)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (enter 184329, tap Confirm)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ✅ Settled. Tx: 0xdef...</span></span></code></pre></div><p><strong>Why this tier exists:</strong> sub-$200 inline taps are the right friction floor for coffee-money buys; &gt;$5K trades deserve a full passkey ceremony. Mini-App OTP sits in the middle — fast enough that you don&#39;t bail on the buy, slow enough that an accidental tap doesn&#39;t move $1K.</p><h2 id="_4-big-trade-—-passkey-deeplink-to-dashboard" tabindex="-1">4. Big trade — passkey deeplink to dashboard <a class="header-anchor" href="#_4-big-trade-—-passkey-deeplink-to-dashboard" aria-label="Permalink to &quot;4. Big trade — passkey deeplink to dashboard&quot;">​</a></h2><p>A $10,000 buy lands in tier 3. The bot can&#39;t drive WebAuthn from inside Telegram (no DOM), so it hands you a deeplink to the dashboard&#39;s <code>/agent/confirm</code> page where your passkey can sign.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /buy 10000 &lt;TOKEN&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → You&#39;re about to buy 10,000 mhUSDC of &lt;TOKEN&gt;.</span></span>
<span class="line"><span>                  Tier:  Passkey deep-link (&gt;$5K)</span></span>
<span class="line"><span>                  For amounts above $5K, you confirm with your</span></span>
<span class="line"><span>                  passkey on the dashboard.</span></span>
<span class="line"><span>                  [🔑 Open passkey dashboard]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap 🔑 Open passkey dashboard)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(Default browser opens https://muhaven.app/agent/confirm?intent=oci_xxx</span></span>
<span class="line"><span> — shows the same cleartext preview, with a passkey confirm button)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap Confirm with passkey, approve with Touch ID)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(Page renders ✅ Settled with Arbiscan link)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ✅ Settled. Tx: 0xfeed... (notified via SSE)</span></span></code></pre></div><p>The Telegram chat updates automatically via SSE — you don&#39;t have to come back to it.</p><h2 id="_5-pause-from-anywhere-—-laptop-just-got-stolen-edition" tabindex="-1">5. Pause from anywhere — laptop just got stolen edition <a class="header-anchor" href="#_5-pause-from-anywhere-—-laptop-just-got-stolen-edition" aria-label="Permalink to &quot;5. Pause from anywhere — laptop just got stolen edition&quot;">​</a></h2><p>You&#39;re at the airport. You left your laptop in the lounge and a stranger walked off with it. Pause from your phone:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /pause</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ⏸ Agent paused.</span></span>
<span class="line"><span>                  On-chain validator uninstalled in block 8214321.</span></span>
<span class="line"><span>                  All propose tools will return 423 PAUSED.</span></span>
<span class="line"><span>                  To resume, open https://muhaven.app/agent on a</span></span>
<span class="line"><span>                  trusted device and complete the WebAuthn ceremony.</span></span></code></pre></div><p>The pause cascades <strong>globally</strong> — HavenBot, MCP, the laptop&#39;s browser tab, the OpenClaw skill on your homelab, every surface now rejects propose calls until you resume. ≤1 Arb block.</p><h2 id="_6-tier-transition-—-switching-from-confirm-per-action-to-advisory-before-a-busy-day" tabindex="-1">6. Tier transition — switching from Confirm-per-action to Advisory before a busy day <a class="header-anchor" href="#_6-tier-transition-—-switching-from-confirm-per-action-to-advisory-before-a-busy-day" aria-label="Permalink to &quot;6. Tier transition — switching from Confirm-per-action to Advisory before a busy day&quot;">​</a></h2><p>Tier transitions can&#39;t be done from Telegram (they need the dashboard ceremony), but you can ask the bot to prepare the deeplink:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → I want to switch back to Advisory tier for today</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → Tier transitions live on the dashboard so the</span></span>
<span class="line"><span>                  passkey ceremony fires. Deeplink:</span></span>
<span class="line"><span>                  https://muhaven.app/agent/policy/transition</span></span>
<span class="line"><span>                  [🔑 Open tier picker]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → (tap, sign with passkey on dashboard)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → ✅ Tier updated. You&#39;re now in Advisory.</span></span>
<span class="line"><span>                  Every buy/claim will prompt your passkey.</span></span></code></pre></div><h2 id="_7-audit-triage-on-the-platform-—-wait-what-did-i-do-yesterday" tabindex="-1">7. Audit triage on the platform — &quot;wait, what did I do yesterday?&quot; <a class="header-anchor" href="#_7-audit-triage-on-the-platform-—-wait-what-did-i-do-yesterday" aria-label="Permalink to &quot;7. Audit triage on the platform — &quot;wait, what did I do yesterday?&quot;&quot;">​</a></h2><p>You think you remember a Tuesday-night buy that went through Telegram inline. You want to verify.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /audit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → Last 10 audit rows:</span></span>
<span class="line"><span>                  • Tue 23:14 propose_buy &lt;TOKEN&gt; 80 mhUSDC</span></span>
<span class="line"><span>                    [source: telegram_inline · settled]</span></span>
<span class="line"><span>                  • Tue 22:47 propose_buy RWA1 50 mhUSDC</span></span>
<span class="line"><span>                    [source: telegram_inline · settled]</span></span>
<span class="line"><span>                  • Mon 09:14 propose_claim &lt;TOKEN&gt; ep6</span></span>
<span class="line"><span>                    [source: dashboard_session_key · settled]</span></span>
<span class="line"><span>                  • ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You → How much did I spend on Telegram inline yesterday?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → Tuesday Telegram inline:</span></span>
<span class="line"><span>                  2 buys, $130 total ($80 &lt;TOKEN&gt; + $50 RWA1).</span></span>
<span class="line"><span>                  Both settled successfully.</span></span></code></pre></div><p>The audit <code>source</code> field is server-derived — the bot can&#39;t lie about which surface confirmed a trade.</p><h2 id="_8-yield-digest-—-what-did-each-token-pay-this-month" tabindex="-1">8. Yield digest — &quot;what did each token pay this month?&quot; <a class="header-anchor" href="#_8-yield-digest-—-what-did-each-token-pay-this-month" aria-label="Permalink to &quot;8. Yield digest — &quot;what did each token pay this month?&quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → How did each of my tokens pay this month?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → May 2026 yield by token:</span></span>
<span class="line"><span>                  • &lt;TOKEN&gt;  $14.20 (1 epoch, claimed)</span></span>
<span class="line"><span>                  • RWA1    $11.80 (1 epoch, not yet claimed)</span></span>
<span class="line"><span>                  • RWA2     $0.00 (no epoch this month)</span></span>
<span class="line"><span>                  Total claimed: $14.20 · Pending: $11.80</span></span>
<span class="line"><span>                  Use /claim RWA1 &lt;epoch&gt; to grab the pending one.</span></span></code></pre></div><h2 id="_9-distribution-status-—-is-my-claim-window-still-open" tabindex="-1">9. Distribution status — &quot;is my claim window still open?&quot; <a class="header-anchor" href="#_9-distribution-status-—-is-my-claim-window-still-open" aria-label="Permalink to &quot;9. Distribution status — &quot;is my claim window still open?&quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /distribution &lt;TOKEN&gt; 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → &lt;TOKEN&gt; epoch 7:</span></span>
<span class="line"><span>                  Status:        finalized · claim window OPEN</span></span>
<span class="line"><span>                  Total funded:  $50,000</span></span>
<span class="line"><span>                  Your share:    ~$14.20 (encrypted)</span></span>
<span class="line"><span>                  Claim deadline: 2026-06-15 23:59 UTC</span></span>
<span class="line"><span>                  Use /claim &lt;TOKEN&gt; 7 to claim.</span></span></code></pre></div><h2 id="_10-linking-a-second-device-—-can-i-use-the-bot-from-my-tablet-too" tabindex="-1">10. Linking a second device — &quot;can I use the bot from my tablet too?&quot; <a class="header-anchor" href="#_10-linking-a-second-device-—-can-i-use-the-bot-from-my-tablet-too" aria-label="Permalink to &quot;10. Linking a second device — &quot;can I use the bot from my tablet too?&quot;&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You → /link</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@muhaven_bot → 🔗 Link code: WXYZ-5678</span></span>
<span class="line"><span>                  This Telegram account is already linked to</span></span>
<span class="line"><span>                  MuHaven wallet 0x1234…cdef. Running /link</span></span>
<span class="line"><span>                  from a different device would re-bind to that</span></span>
<span class="line"><span>                  device&#39;s Telegram account; you don&#39;t need to</span></span>
<span class="line"><span>                  re-link the same Telegram account on a new phone.</span></span>
<span class="line"><span>                  Telegram syncs the chat across your devices</span></span>
<span class="line"><span>                  automatically.</span></span></code></pre></div><p>Your Telegram account is what&#39;s linked to your MuHaven wallet — not a specific device. Install Telegram on a new device, sign into the same account, and the bot just works.</p><h2 id="tips-for-the-phone-surface" tabindex="-1">Tips for the phone surface <a class="header-anchor" href="#tips-for-the-phone-surface" aria-label="Permalink to &quot;Tips for the phone surface&quot;">​</a></h2><ol><li><strong>Use commands, not prose.</strong> The bot is a deterministic command interpreter, not an LLM. <code>/buy 50 &lt;TOKEN&gt;</code> always works; &quot;buy me fifty of <code>&lt;TOKEN&gt;</code> please&quot; doesn&#39;t.</li><li><strong>Don&#39;t fight the tier classifier.</strong> If you&#39;re trying to buy $250, it goes to Mini-App OTP. There&#39;s no per-user override; that&#39;s intentional.</li><li><strong>Pause is global.</strong> Pausing from Telegram pauses HavenBot, MCP, every surface. That&#39;s the kill-switch&#39;s job.</li><li><strong>Tier transitions need the dashboard.</strong> Telegram can deeplink you there; it can&#39;t drive the WebAuthn ceremony itself.</li><li><strong>The bot never holds your key.</strong> It can prepare actions and send the inline buttons; the actual signing happens server-side (with strict tier + user-id verification) or on the dashboard (passkey ceremony).</li></ol><h2 id="where-next" tabindex="-1">Where next <a class="header-anchor" href="#where-next" aria-label="Permalink to &quot;Where next&quot;">​</a></h2><ul><li><a href="/openclaw/tools">Available tools</a> — full reference for every command above.</li><li><a href="/openclaw/confirmation-tiers">Three confirmation tiers</a> — exactly what each tier does.</li><li><a href="/openclaw/telegram-bot">Telegram bot</a> — link your account, the first command.</li><li><a href="/openclaw/troubleshooting">Troubleshooting</a> — common skill + bot issues.</li></ul>`,42)])])}const m=n(p,[["render",i]]);export{u as __pageData,m as default};
