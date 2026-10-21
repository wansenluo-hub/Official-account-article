# WechatGZH Writing Workflow

Use this reference when the current task is for the `E:\WechatGZH` project.

## 1. Core project paths

- Workspace root: `E:\WechatGZH`
- Account config: `E:\WechatGZH\工具\accounts\ai-anli.json`
- Queue dir: `E:\WechatGZH\accounts-data\ai-anli\queue`
- Review log: `E:\WechatGZH\accounts-data\ai-anli\review\草稿验收记录.md`
- Project memory / de-dupe library: `E:\WechatGZH\项目记忆\已拆解项目库.md`
- Account template library: `E:\WechatGZH\accounts-data\ai-anli\profile\爆款样本模板库.md`
- Global layout library: `E:\WechatGZH\排版模板库.md`
- Writing guidance: `E:\WechatGZH\02-文章生产\写作Skill调用规范.md`
- Title examples: `E:\WechatGZH\02-文章生产\标题模板.md`
- Article skeleton examples: `E:\WechatGZH\02-文章生产\文章模板.md`
- Typesetting CLI: `E:\WechatGZH\工具\md2wx\cli.js`
- Chrome-session publisher bridge: `E:\WechatGZH\工具\codex-publish.js`

## 2. Account-specific rules for AI案例拆解

Read the live account config before acting. The current stable rules are:

- account name: `AI案例拆解`
- publish mode: draft only
- daily limit: 1 draft
- default column theme: `business-blue`
- preferred fallback themes: `minimal-black`, `swiss`, `navy`, `vivid-cyan`

### Content direction

Prefer:

- AI case studies
- tool or product breakdowns
- ordinary-user actions that can be copied
- important AI news interpreted for ordinary readers

Avoid:

- pure news搬运
- abstract opinion essays
- fake赚钱 stories
- unsupported hard data

### Writing constraints

- start with the user relationship quickly
- keep one explicit judgment
- include at least one actionable move
- avoid repeating old project angles

## 3. De-duplication sources

Check these before selecting a new topic:

1. `项目记忆/已拆解项目库.md`
2. recent markdown files in `accounts-data/ai-anli/queue`
3. recent entries in `accounts-data/ai-anli/review/草稿验收记录.md`

Use both topic overlap and title overlap. If the theme is already too close to recent items, replace it even if the source URL is new.

## 4. Queue naming convention

Markdown drafts use:

`NNN-<title>.md`

Supporting files use:

- `NNN-<title>.<theme>.wx.html`
- `NNN-<title>.<theme>.preview.html`

Use the helper script in `../scripts/next_queue_id.js` to compute the next `NNN`.

## 5. Drafting expectations

When the user does not provide a rigid structure, default to:

1. source fact or concrete action hook
2. first-screen judgment
3. explain what happened
4. explain why it matters
5. extract 2-3 ordinary-user actions
6. mark the risk boundary
7. close on the real skill/value shift

Generate 5 title candidates before choosing one, unless the user already fixed the title.

### Title workflow for `AI案例拆解`

Do not start title writing from the product feature summary alone.

Prefer this sequence:

1. identify who will feel this change first
2. name the concrete annoying scene, cost, or embarrassment
3. add the external trigger or product change
4. leave part of the conclusion unstated so the body can finish it

The working formula is:

`pain scene + specific person + outside change + partial reveal`

Good raw materials:

- someone who is still using an old way to protect their edge
- someone who is already frustrated, tired, or falling behind
- a moment that feels embarrassing, repetitive, or costly
- a line that sounds like a real person complaining

Examples of stronger opening angles:

- `还在靠“别人不会我会修”吃信息差的人`
- `每次做表做到想砸电脑的人`
- `还在一边骂表格一边加班补洞的人`
- `很多人做表不是不会，是卡在这一步卡到想辞职`

Title checks for this account:

- there should usually be a person, not just a product
- there should be a concrete scene, not only an abstract judgment
- do not explain the full thesis in the title
- do not sound like a press release, feature note, or search keyword
- the body must still be able to cash the promise

Avoid these weak patterns:

- product release summaries
- complete thesis statements with no suspense
- abstract structure-change wording with no human pain
- clever wording that sounds engineered rather than spoken

If several titles are available, prefer the one that sounds most like something a real frustrated reader would stop for in a feed.

## 6. Typesetting

Use the built-in CLI:

```powershell
node .\工具\md2wx\cli.js "<markdown-file>" --theme business-blue
```

Outputs:

- WeChat paste HTML: `.<theme>.wx.html`
- preview page: `.<theme>.preview.html`

Do not hand-roll HTML unless the project tool is broken.

## 7. Uploading to WeChat draft

Preferred order:

1. reuse the currently logged-in Chrome + WeChat session
2. open the editor for the correct account
3. paste the formatted HTML into the body editor
4. set title and author
5. save as draft only
6. verify save confirmation and resulting URL

Do not publish unless the user explicitly asks.

If browser/session discovery shows multiple open accounts or an uncertain token/account state, stop and confirm before saving.

## 8. Acceptance record format

Append one new entry to `草稿验收记录.md` with:

- ISO-like timestamp line with the final title
- account
- draft URL or ID
- save time
- body length
- structure counts: `h2`, `p`, `ul`, `ol`, `blockquote`
- cover status
- pass/fail
- failure reason

## 9. Important repo-specific notes

- Some JSON config paths may still point to `E:/微信公众号/...`. When that conflicts with the live workspace, use the real files under `E:\WechatGZH`.
- Do not process old queue items unless the user explicitly asks.
- Prefer primary sources for source selection.
- For browser work, prefer the existing logged-in session over launching a fresh profile.
