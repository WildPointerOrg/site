---
title: "NotesAI"
tagline: "AI-powered storage, search, and chat over your personal notes and documents"
coverImage: "/images/projects/notes-ai_2.png"
coverAlt: "NotesAI project cover — personal knowledge and notes"
status: "active"
stage: "discovery"
stageLabel: "Discovery"
summary: "Store notes, index knowledge with vector search, and ask questions in natural language using RAG over your own documents."
startedAt: "2026-05-01"
neededRoles:
  - "Product Lead"
  - "Coordinator"
  - "ML Engineer"
  - "Backend Developer"
  - "Frontend Developer"
  - "QA Engineer"
links:
  github: "https://github.com/WildPointerOrg"
  docs: ""
  discussions: "https://github.com/orgs/WildPointerOrg/discussions/1"
  roadmap: ""
contacts:
  coordinator: "tg: @chechestor"
  telegram: ""
  email: ""
featured: true
order: 1
---

## Project Goal

People accumulate large amounts of notes, documents, and personal knowledge, but existing note-taking tools make retrieval difficult. Users forget where information was stored and spend significant time searching manually.

NotesAI addresses this by combining document storage, vector search, and LLM-based interaction in one product. Users upload notes (text, links, or voice) via bot, GUI, mobile, or app; the system indexes content into a vector database; users ask questions in natural language and receive answers grounded in their own knowledge base.

**Idea discussion:** [WildPointerOrg discussion #1](https://github.com/orgs/WildPointerOrg/discussions/1#discussioncomment-16917051)

## Expected Value

**For users**

- Find information from a personal knowledge base using natural language instead of manual search.
- Reduce time spent hunting through notes and improve day-to-day productivity.
- Search previous conversations and notes in one place.

**For the community**

- Hands-on experience building a real RAG pipeline: embeddings, retrieval, and LLM integration.
- Open-source product aimed at developers, researchers, students, and technical specialists who work with large volumes of information.

**Target audience:** developers, researchers, students, and technical specialists working across devices during study, research, development, meetings, and daily work.

## Current Focus

The squad is in **Discovery**: validating the problem, use cases, and product scope before implementation.

**Main user flow under validation**

1. User sends notes (text / link / voice) to the app.
2. System indexes notes into a vector database.
3. User asks questions in natural language.
4. System retrieves relevant chunks and generates contextual answers.
5. User searches prior conversations and notes.

**Proposed solution (direction)**

- Note upload and organization.
- Vector search and tagging / categorization.
- AI chat over personal notes with conversation history.
- Multilingual support and API access (planned).

**Compared to existing tools**

| Product | Notes |
| --- | --- |
| Notion AI | Strong product; limited free API for our use case — needs further discovery |
| Obsidian | Popular locally; less convenient for quick capture and AI-first workflows |
| Evernote | Established notes app; weak AI integration, no free API |
| Mem.ai | Alternative AI notes product — needs further discovery |

## Open Questions

**Risks**

- High API and inference costs at scale.
- Poor retrieval quality (RAG misses relevant context).
- Low contributor activity on a long-running open project.
- Privacy and trust for highly personal document stores.

**Product**

- Final choice of vector DB, embedding models, and hosting model.
- MVP surface: bot vs web vs mobile first.
- Pricing / limits for LLM calls in a volunteer-built product.

**Later**

- Team collaboration and shared knowledge spaces (post-MVP).
