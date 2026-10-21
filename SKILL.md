---
name: xie-zuo
description: End-to-end WeChat public account article workflow for the WechatGZH project. Use when asked to review what has already been written, avoid duplicate topics, pick a fresh primary source, draft a new Chinese article for a target account, generate title candidates, typeset with md2wx, save into the WeChat draft box, or append draft acceptance records. Trigger on requests such as writing today's new article, checking old topics before choosing a new one, generating titles, formatting an article, or uploading a draft without publishing.
---

# Xie Zuo

## Overview

Execute the full article pipeline for this project: de-duplicate, choose a topic, write the markdown draft, typeset it, save it as a WeChat draft, and record acceptance.

Read [references/project-workflow.md](references/project-workflow.md) before acting. Keep this file lean and use the reference for repo-specific paths and rules.

## Workflow

### 1. Lock the operating context

Read the target account config and the recent queue and review files first.

If the user already specifies the account, template, source article, title, or today's scope, treat those as fixed constraints and skip rediscovering them.

If config paths disagree with the live workspace, trust the live workspace and note the mismatch.

### 2. Check duplicates before choosing anything new

Check the project memory library and the target account history before selecting a source.

Reject topics that are already covered, too close to recent titles, or outside the account's topic boundaries.

When the user asks for a fresh article but does not provide a source, prefer current primary sources over second-hand summaries.

### 3. Build the article around one judgment

Decide the core judgment before writing body paragraphs.

Write for the specific account and column, not as a generic report.

Produce 5 candidate titles unless the user already locks one. For `AI案例拆解`, prefer pain-scene titles first and judgment second: start from a real person, a concrete annoying moment, or a felt loss before revealing the article's conclusion. Avoid product-spec or summary-style titles that say everything upfront.

Keep the article grounded in traceable facts. Avoid unsupported hard numbers, fake examples, and padded background.

### 4. Save the draft into the queue

Use `node scripts/next_queue_id.js <queue-dir>` to compute the next three-digit queue id.

Create the markdown file in the target queue directory with the project naming convention:

`NNN-<title>.md`

Keep the filename readable. Remove filesystem-hostile punctuation if needed, but do not over-sanitize Chinese titles into pinyin.

### 5. Typeset with project tooling

Use the repo's md2wx tool instead of rebuilding HTML by hand.

Prefer the account's primary theme or the theme fixed by the user. Generate both:

- `.<theme>.wx.html`
- `.<theme>.preview.html`

### 6. Save to WeChat draft and do not publish by default

Prefer the user's already logged-in Chrome and WeChat session.

Reuse the current session instead of forcing a fresh login whenever possible.

Save to draft only unless the user explicitly requests publishing.

Verify the result after saving:

- correct account
- correct title
- formatted body instead of raw HTML
- visible save confirmation or history entry
- usable editor URL

### 7. Append acceptance records

Append a new entry to the target review log.

Include at least:

- save time
- draft URL or ID
- body length
- structure counts
- cover status
- pass or fail

## Decision rules

### When to run the full pipeline

Run the entire flow when the user asks for today's new article, a fresh draft, or an end-to-end write-and-upload task.

### When to skip steps

Skip topic selection when the user already gives the exact source or plan.

Skip title generation when the user locks the final title.

Skip drafting and only typeset or upload when the markdown already exists and the user only asks for finishing steps.

### When to pause and confirm

Pause only if one choice has non-obvious consequences, such as:

- multiple candidate accounts
- unclear publish versus draft-only intent
- source conflict with recent duplicate topics
- login or session mismatch that could save into the wrong public account

## Tooling

Prefer the repo's built-in tools and references:

- md2wx CLI in the repo tools folder
- the Chrome-session publisher bridge
- account configs under the repo tools folder
- queue, review, and history files under `accounts-data`

Do not process old queue items unless the user explicitly asks.

Do not auto-publish.
