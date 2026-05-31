import{c as s,Q as n,j as e,m as t}from"./chunks/framework.BPKcPtvA.js";const d=JSON.parse('{"title":"@muhaven/mcp — playbook","description":"Practical scenarios for getting MuHaven results out of your own LLM.","frontmatter":{"title":"@muhaven/mcp — playbook","description":"Practical scenarios for getting MuHaven results out of your own LLM."},"headers":[],"relativePath":"mcp/playbook.md","filePath":"mcp/playbook.md","lastUpdated":1778983454000}'),o={name:"mcp/playbook.md"};function p(l,a,i,r,u,c){return n(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="mcp-playbook" tabindex="-1">MCP playbook <a class="header-anchor" href="#mcp-playbook" aria-label="Permalink to &quot;MCP playbook&quot;">​</a></h1><p>A library of <strong>scenarios that work</strong> — copy a prompt, point it at your LLM with the <code>muhaven</code> MCP server installed, and get the result you want. Every scenario shows:</p><ol><li>The exact prompt you type.</li><li>Which MCP tool(s) the LLM picks.</li><li>What you see back.</li></ol><blockquote><p>Throughout this page, <code>&lt;TOKEN&gt;</code> and <code>RWA1</code> stand in for whichever active RWA token you hold. Your dashboard&#39;s Tokens page lists the actual symbols.</p></blockquote><p>If your prompt doesn&#39;t match a scenario here, follow the same shape: be concrete about the asset, the time window, and the outcome you want.</p><h2 id="_1-cross-mcp-morning-brief" tabindex="-1">1. Cross-MCP &quot;morning brief&quot; <a class="header-anchor" href="#_1-cross-mcp-morning-brief" aria-label="Permalink to &quot;1. Cross-MCP &quot;morning brief&quot;&quot;">​</a></h2><p>Sit MuHaven next to your other MCP servers — Notion, GitHub, Gmail, calendar — and pull a single chat turn that crosses all of them.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Give me a 5-bullet morning brief: my MuHaven portfolio summary</span></span>
<span class="line"><span>  plus signal flags, the top item from my Notion &quot;Investments&quot;</span></span>
<span class="line"><span>  database, today&#39;s calendar from Google, and any new starred</span></span>
<span class="line"><span>  GitHub PR for orgs I follow.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] muhaven.read.portfolio()</span></span>
<span class="line"><span>[notion]  notion.search({&quot;query&quot;:&quot;Investments&quot;,&quot;filter&quot;:{&quot;type&quot;:&quot;database&quot;}})</span></span>
<span class="line"><span>[gcal]    calendar.list_events({&quot;date&quot;:&quot;today&quot;})</span></span>
<span class="line"><span>[github]  github.list_starred_prs()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Morning brief — 2026-05-16:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>• MuHaven: 3 RWA positions, balanced. No isOverexposed flag.</span></span>
<span class="line"><span>  Last sync 09:14 UTC.</span></span>
<span class="line"><span>• Investments DB: &quot;Rotate 10% out of growth into treasuries&quot;</span></span>
<span class="line"><span>  (last edited yesterday).</span></span>
<span class="line"><span>• Calendar: 11:00 RWA underwriting call · 14:30 quarterly review.</span></span>
<span class="line"><span>• GitHub: 2 starred PRs merged overnight in fhenix-cofhe org.</span></span>
<span class="line"><span>• Action: pre-call, run &quot;Quote 1000 mhUSDC of &lt;TOKEN&gt;&quot; to have</span></span>
<span class="line"><span>  fresh NAV ready.</span></span></code></pre></div><p><strong>Why this works:</strong> every MCP server returns structured data; the LLM is good at composing structured data into a brief. MuHaven&#39;s portfolio summary is small, aggregate-only, and never includes encrypted handles — perfect for an LLM context summary.</p><h2 id="_2-scheduled-weekly-yield-check" tabindex="-1">2. Scheduled weekly yield check <a class="header-anchor" href="#_2-scheduled-weekly-yield-check" aria-label="Permalink to &quot;2. Scheduled weekly yield check&quot;">​</a></h2><p>Most MCP hosts (including Claude Code with <code>cron</code>, or any LLM with a scheduling agent) can run prompts on a recurring schedule. Wire this one to fire Friday afternoons:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Every Friday at 17:00 local time:</span></span>
<span class="line"><span>  1. Call muhaven.read.yields for all my tokens.</span></span>
<span class="line"><span>  2. If any token has unclaimed yield &gt;$10 in the past 7 days,</span></span>
<span class="line"><span>     propose a claim (don&#39;t submit it — return the envelope).</span></span>
<span class="line"><span>  3. Email me a 3-line summary at me@example.com.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] muhaven.read.tokens()</span></span>
<span class="line"><span>[muhaven] muhaven.read.yields({&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,&quot;since&quot;:&quot;2026-05-09&quot;})</span></span>
<span class="line"><span>[muhaven] muhaven.read.yields({&quot;token&quot;:&quot;RWA1&quot;,&quot;since&quot;:&quot;2026-05-09&quot;})</span></span>
<span class="line"><span>[muhaven] muhaven.position.claim({&quot;items&quot;:[{&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,&quot;epoch&quot;:6}]})</span></span>
<span class="line"><span>          → returns envelope + broker signature</span></span>
<span class="line"><span>[gmail]   gmail.send({&quot;to&quot;:&quot;me@example.com&quot;,&quot;subject&quot;:&quot;MuHaven weekly&quot;,...})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Friday recap sent. Two unclaimed epochs ≥$10:</span></span>
<span class="line"><span>  • &lt;TOKEN&gt; epoch 6 — $14.20 (envelope queued)</span></span>
<span class="line"><span>  • RWA1 epoch 4 — $11.80 (envelope queued)</span></span>
<span class="line"><span>Open https://muhaven.app/agent to confirm both with one passkey tap.</span></span></code></pre></div><p><strong>Important:</strong> MCP propose tools <strong>never auto-submit</strong>. The scheduled run prepares the envelope; you commit it from the dashboard at your convenience. That&#39;s the no-auto-submit invariant — even a scheduled job can&#39;t sign on your behalf.</p><h2 id="_3-compare-my-rwa-against-a-stock-i-track" tabindex="-1">3. &quot;Compare my RWA against a stock I track&quot; <a class="header-anchor" href="#_3-compare-my-rwa-against-a-stock-i-track" aria-label="Permalink to &quot;3. &quot;Compare my RWA against a stock I track&quot;&quot;">​</a></h2><p>If you also have a market-data MCP server (Yahoo Finance, Polygon, Alpaca), you can ask cross-asset questions in one turn:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Compare the last-30-day total return of my &lt;TOKEN&gt; position</span></span>
<span class="line"><span>  vs the SPY ETF. Use my actual &lt;TOKEN&gt; share count and the most</span></span>
<span class="line"><span>  recent NAV.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven]  muhaven.read.portfolio()</span></span>
<span class="line"><span>[muhaven]  muhaven.read.yields({&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,&quot;since&quot;:&quot;2026-04-16&quot;})</span></span>
<span class="line"><span>[polygon]  polygon.aggregate({&quot;ticker&quot;:&quot;SPY&quot;,&quot;from&quot;:&quot;2026-04-16&quot;,&quot;to&quot;:&quot;2026-05-16&quot;})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Over the last 30 days:</span></span>
<span class="line"><span>  &lt;TOKEN&gt;:    +0.42% (yield + NAV drift, your ~99 shares)</span></span>
<span class="line"><span>  SPY:        +1.84% (price only)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;TOKEN&gt; is a low-vol cash-equivalent; the comparison is most</span></span>
<span class="line"><span>useful as &quot;risk-off cushion vs equity beta&quot;, not as a pure</span></span>
<span class="line"><span>return race. Want me to chart the daily series?</span></span></code></pre></div><p><strong>Why this works:</strong> MCP returns the <strong>share count</strong> (aggregate, not the encrypted balance) and the per-epoch yield rate. The LLM composes that with the external market-data MCP into a like-for-like comparison.</p><h2 id="_4-diagnose-an-audit-anomaly" tabindex="-1">4. &quot;Diagnose an audit anomaly&quot; <a class="header-anchor" href="#_4-diagnose-an-audit-anomaly" aria-label="Permalink to &quot;4. &quot;Diagnose an audit anomaly&quot;&quot;">​</a></h2><p>You see something odd in the audit log and want an LLM to help triage:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Look at my MuHaven audit log for the last 48h. Highlight any</span></span>
<span class="line"><span>  rows that came from a different surface than usual, any</span></span>
<span class="line"><span>  permit_attempted failures, and any rebalance proposals I</span></span>
<span class="line"><span>  didn&#39;t follow through on.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] muhaven.read.audit({&quot;since&quot;:&quot;2026-05-14T10:00:00Z&quot;,&quot;limit&quot;:50})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>24-hour audit summary (12 rows):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  • 10 from dashboard_session_key (your usual)</span></span>
<span class="line"><span>  •  2 from telegram_inline (Tuesday 11:42, 11:43 — both buys,</span></span>
<span class="line"><span>     both settled)</span></span>
<span class="line"><span>  •  0 permit_attempted failures</span></span>
<span class="line"><span>  •  1 propose_rebalance that never settled (Tuesday 14:21);</span></span>
<span class="line"><span>     no follow-up commit row</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The Telegram rows match your usual pattern (you confirmed two</span></span>
<span class="line"><span>sub-$200 buys on the move). The unrebalanced propose is the</span></span>
<span class="line"><span>one to look at — open /agent → Rebalance to see if you still</span></span>
<span class="line"><span>want to act on it.</span></span></code></pre></div><p><strong>Why this works:</strong> <code>muhaven.read.audit</code> returns cursor-paginated rows with a <code>source</code> field server-derived from the auth path. The LLM can spot anomalies because the source values are constrained — there are only ~6 valid sources.</p><h2 id="_5-pre-flight-a-big-buy" tabindex="-1">5. &quot;Pre-flight a big buy&quot; <a class="header-anchor" href="#_5-pre-flight-a-big-buy" aria-label="Permalink to &quot;5. &quot;Pre-flight a big buy&quot;&quot;">​</a></h2><p>Before you commit to a &gt;$5K buy, run a pre-flight that pulls oracle freshness, recent yield history, and the protection coverage state:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Pre-flight a $20,000 buy of &lt;TOKEN&gt;. I want:</span></span>
<span class="line"><span>  1. Current NAV with timestamp.</span></span>
<span class="line"><span>  2. Yield rate of the last 3 epochs.</span></span>
<span class="line"><span>  3. Protection coverage state.</span></span>
<span class="line"><span>  4. Whether my Confirm-per-action session key has room for</span></span>
<span class="line"><span>     this within its remaining value cap.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] muhaven.read.tokens()</span></span>
<span class="line"><span>[muhaven] muhaven.read.yields({&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,&quot;limit&quot;:3})</span></span>
<span class="line"><span>[muhaven] muhaven.read.protection_coverage({&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;})</span></span>
<span class="line"><span>[muhaven] muhaven.policy.session_key_status()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pre-flight for $20K of &lt;TOKEN&gt;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  NAV:                $1.003 (fresh)</span></span>
<span class="line"><span>  Last 3 epoch APR:   3.8% · 4.1% · 3.9%</span></span>
<span class="line"><span>  Protection:         active (50bps reserve covers $250K notional)</span></span>
<span class="line"><span>  Session key cap:    $5K per call · $50K per epoch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>⚠️ Your session key value cap is $5K/call. A $20K buy would need</span></span>
<span class="line"><span>4 chunked UserOps OR a tier-3 passkey deeplink. Recommend</span></span>
<span class="line"><span>opening /agent on dashboard and using the passkey confirm path</span></span>
<span class="line"><span>for the full $20K in one tx.</span></span></code></pre></div><p><strong>Why this works:</strong> every fact comes from a structured MCP tool. The LLM doesn&#39;t need to &quot;remember&quot; your session-key scope — it asks for it.</p><h2 id="_6-read-only-sanity-check-from-a-shared-machine" tabindex="-1">6. &quot;Read-only sanity check from a shared machine&quot; <a class="header-anchor" href="#_6-read-only-sanity-check-from-a-shared-machine" aria-label="Permalink to &quot;6. &quot;Read-only sanity check from a shared machine&quot;&quot;">​</a></h2><p>If you&#39;re at a shared workstation or running a demo, start the broker in read-only mode (see <a href="/mcp/read-only-mode">Read-only mode</a>) and run inspection prompts only:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; What MuHaven tools do you have right now?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] (reads tool catalog)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>I have 8 read tools:</span></span>
<span class="line"><span>  muhaven.read.portfolio</span></span>
<span class="line"><span>  muhaven.read.yields</span></span>
<span class="line"><span>  muhaven.read.distribution</span></span>
<span class="line"><span>  muhaven.read.tokens</span></span>
<span class="line"><span>  muhaven.read.audit</span></span>
<span class="line"><span>  muhaven.read.activity</span></span>
<span class="line"><span>  muhaven.read.protection_coverage</span></span>
<span class="line"><span>  muhaven.read.kyc_attestation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>No position, policy, issuer, or governance tools are registered</span></span>
<span class="line"><span>on this install — the broker started with MUHAVEN_READ_ONLY=true.</span></span>
<span class="line"><span>I can answer questions but cannot propose any state changes.</span></span></code></pre></div><p>A jailbroken LLM can&#39;t ask for a propose tool that isn&#39;t in its catalog. Read-only is the cheapest defense-in-depth control for any shared or curated install.</p><h2 id="_7-issuer-scenarios" tabindex="-1">7. Issuer scenarios <a class="header-anchor" href="#_7-issuer-scenarios" aria-label="Permalink to &quot;7. Issuer scenarios&quot;">​</a></h2><p>If you&#39;re signed in with an <strong>issuer&#39;s MuHaven wallet</strong>, the issuer-side MCP tools become callable. Two scenarios:</p><h3 id="monthly-distribution-rehearsal" tabindex="-1">Monthly distribution rehearsal <a class="header-anchor" href="#monthly-distribution-rehearsal" aria-label="Permalink to &quot;Monthly distribution rehearsal&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Show me my last 3 yield distributions to &lt;TOKEN&gt; holders.</span></span>
<span class="line"><span>  Then draft (but don&#39;t submit) a $50,000 distribution for</span></span>
<span class="line"><span>  May 2026 with the same per-share rate as last month.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[muhaven] muhaven.issuer.audit_query({&quot;tool&quot;:&quot;distribute_yield&quot;,</span></span>
<span class="line"><span>                                       &quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,&quot;limit&quot;:3})</span></span>
<span class="line"><span>[muhaven] muhaven.issuer.distribute_yield({&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;,</span></span>
<span class="line"><span>                                            &quot;totalUsd6&quot;:50000000000,</span></span>
<span class="line"><span>                                            &quot;label&quot;:&quot;May 2026&quot;})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Last 3 distributions to &lt;TOKEN&gt;:</span></span>
<span class="line"><span>  Apr — $48K / 1,200,000 shares = $0.0400/share</span></span>
<span class="line"><span>  Mar — $46K / 1,180,000 shares = $0.0390/share</span></span>
<span class="line"><span>  Feb — $45K / 1,150,000 shares = $0.0391/share</span></span>
<span class="line"><span></span></span>
<span class="line"><span>May draft prepared: $50,000 / ~1,250,000 shares = $0.0400/share</span></span>
<span class="line"><span>Envelope queued. Open /agent on dashboard to confirm with your</span></span>
<span class="line"><span>issuer passkey.</span></span></code></pre></div><h3 id="whitelist-diff" tabindex="-1">Whitelist diff <a class="header-anchor" href="#whitelist-diff" aria-label="Permalink to &quot;Whitelist diff&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Compare my &lt;TOKEN&gt; whitelist to a list of addresses in a Notion</span></span>
<span class="line"><span>  page titled &quot;Q2 Investors&quot;. Tell me which addresses are on the</span></span>
<span class="line"><span>  Notion list but NOT yet on the whitelist.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[notion]   notion.search({&quot;query&quot;:&quot;Q2 Investors&quot;})</span></span>
<span class="line"><span>[muhaven]  muhaven.issuer.audit_query({&quot;tool&quot;:&quot;kyc_add&quot;,&quot;token&quot;:&quot;&lt;TOKEN&gt;&quot;})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Notion list has 24 addresses. &lt;TOKEN&gt; whitelist log shows 21</span></span>
<span class="line"><span>permit_granted kyc_add rows in the past 90 days.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3 addresses are in Notion but not in your add-log:</span></span>
<span class="line"><span>  • 0xabc...001</span></span>
<span class="line"><span>  • 0xdef...002</span></span>
<span class="line"><span>  • 0x123...003</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Want me to propose 3 kyc_add operations? You&#39;ll sign each one</span></span>
<span class="line"><span>with your issuer passkey from the dashboard.</span></span></code></pre></div><h2 id="tips-for-writing-prompts-that-just-work" tabindex="-1">Tips for writing prompts that just work <a class="header-anchor" href="#tips-for-writing-prompts-that-just-work" aria-label="Permalink to &quot;Tips for writing prompts that just work&quot;">​</a></h2><ol><li><strong>Be concrete about the asset.</strong> Use the actual token symbol, not &quot;my position.&quot; LLMs sometimes parameterize too aggressively.</li><li><strong>Be concrete about the time window.</strong> &quot;Last 30 days&quot;, &quot;this quarter&quot;, &quot;since Tuesday&quot; — better than &quot;recent&quot;.</li><li><strong>Be concrete about the outcome.</strong> &quot;Email me a summary&quot;, &quot;draft (don&#39;t submit)&quot;, &quot;compare A vs B&quot; — better than &quot;look at it&quot;.</li><li><strong>Don&#39;t ask the LLM to decrypt.</strong> MCP tools never return cleartext balances. If you need a number, switch to the dashboard and use <code>decryptForView</code> there.</li><li><strong>Use scheduled hosts for recurring brief.</strong> Claude Code with cron, or your LLM&#39;s own scheduling agent, can fire the same prompt every Friday. The no-auto-submit invariant means scheduled runs prepare envelopes only — you commit on the dashboard.</li></ol><h2 id="where-next" tabindex="-1">Where next <a class="header-anchor" href="#where-next" aria-label="Permalink to &quot;Where next&quot;">​</a></h2><ul><li><a href="/mcp/first-chat">First chat</a> — the basics if you haven&#39;t done the walkthrough yet.</li><li><a href="/mcp/tools">Tool catalog</a> — the strict schemas behind every tool the LLM picks.</li><li><a href="/mcp/read-only-mode">Read-only mode</a> — lock the install to the 8 read tools.</li><li><a href="/mcp/broker">Broker daemon</a> — how the broker keeps your keys out of the LLM context.</li></ul>`,39)])])}const m=s(o,[["render",p]]);export{d as __pageData,m as default};
