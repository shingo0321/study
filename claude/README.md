---
layout: default
title: 資格一覧
nav_order: 2
permalink: /claude/
---

# Claude認定資格 勉強用プロジェクト

Anthropic公式「Claude Certification Program」の学習用フォルダ。全4試験、いずれもPearson VUE経由のproctored試験(120分、合格ラインはスケール100〜1000中720点)。前提資格は4試験とも**なし**(Architect – ProfessionalもFoundations合格は必須ではない)。

## 資格一覧

| フォルダ | 資格名 | 受験料 | 出題数 | ドメイン数 |
| --- | --- | --- | --- | --- |
| [`associate-foundations/`](associate-foundations/) | Claude Certified Associate – Foundations (CCAO-F) | $99 | 60問 | 7 |
| [`developer-foundations/`](developer-foundations/) | Claude Certified Developer – Foundations (CCDV-F) | $125 | 53問 | 8 |
| [`architect-foundations/`](architect-foundations/) | Claude Certified Architect – Foundations (CCAR-F) | $125 | 60問(シナリオ形式) | 5 |
| [`architect-professional/`](architect-professional/) | Claude Certified Architect – Professional (CCAR-P) | $175 | 63問 | 7 |

各資格で対象読者・出題ドメインが異なるため、`topics/`配下のフォルダ構成は資格ごとに公式ドメイン名で揃えている(詳細は各フォルダの`README.md`を参照)。

- Associate: 業務でClaudeを使いこなす利用者向け(プロンプト設計、出力評価、製品/モデル選定、ワークフロー統合、ガバナンス等)
- Developer: Claudeを使ったアプリ/エージェント実装者向け(API統合、Claude Code、モデル選定、ツール/MCP実装等)
- Architect Foundations: ソリューション設計の基礎(エージェント型アーキテクチャ、ツール設計/MCP、Claude Code、プロンプト設計、コンテキスト管理)
- Architect Professional: 本番運用を統括する上級アーキテクト向け(設計、統合、評価、ガバナンス、ステークホルダー対応、開発者生産性)

各フォルダ共通:

- `topics/` — 公式ドメインごとのノート
- `practice-questions/` — 練習問題・模擬問題(独自作成、実際の試験問題ではない)

## 参考リンク

- [Pearson VUE: Claude Certification Program](https://www.pearsonvue.com/us/en/anthropic.html)
