---
layout: default
title: ホーム
nav_order: 1
description: "Claude Certification Program 学習ノート・練習問題"
permalink: /claude/
---

# Claude認定資格 学習サイト

Anthropic公式「Claude Certification Program」の学習用フォルダ。全4試験、いずれもPearson VUE経由のproctored試験(120分、合格ラインはスケール100〜1000中720点)。前提資格は4試験とも**なし**(Architect – ProfessionalもFoundations合格は必須ではない)。実際の試験は英語で実施されるため、練習問題には英訳を併記しています。

> 練習問題はすべて自己学習用に作成したオリジナル問題であり、Anthropic公式の実際の試験問題ではありません。

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
- `mock-exam/` — `practice-questions/`と同じ問題セットを使った採点機能付きの模擬試験(ブラウザ上で解答し、自動採点・ドメイン別の正答数を表示)

## 参考リンク

- [Pearson VUE: Claude Certification Program](https://www.pearsonvue.com/us/en/anthropic.html)
