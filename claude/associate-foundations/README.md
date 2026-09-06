---
layout: default
title: Associate – Foundations
nav_order: 3
has_children: true
permalink: /claude/associate-foundations/
---

# Claude Certified Associate – Foundations 勉強用プロジェクト

Anthropic公式の技術認定「Claude Certified Associate – Foundations」(CCAO-F)の学習用フォルダ。
60問・120分の proctored 試験。開発者向けではなく、業務・生産性ユーザー向けにClaudeを使いこなすための知識(プロンプト設計、出力評価、製品/モデル選定、ワークフロー統合、設定・ナレッジ管理、ガバナンス・責任あるAI利用、トラブルシューティング)を問う。試験はPearson VUE経由、Anthropic Partner Academyから申込。合格ライン: スケール100〜1000中720点。

## 出題分野(ドメイン)

| # | ドメイン | 出題比率(目安) |
|---|---|---|
| 1 | Prompting and Task Execution(プロンプト設計とタスク実行) | 14% |
| 2 | Output Evaluation and Validation(出力の評価と検証) | 21%(最大配点) |
| 3 | Product and Model Selection(製品とモデルの選択) | 12% |
| 4 | Workflow Integration and Solution Design(ワークフロー統合とソリューション設計) | 16% |
| 5 | Configuration and Knowledge Management(設定とナレッジ管理) | 12% |
| 6 | Governance, Risk, and Responsible Use(ガバナンス・リスク・責任あるAI利用) | 15% |
| 7 | Troubleshooting and Escalation(トラブルシューティングとエスカレーション、名称は非公式・推定) | 残り約10% |

比率は公開情報をもとにした目安であり、実際の試験で厳密に保証されるものではない。ドメイン7の名称はAnthropic公式で明言されたものではなく推定(詳細は `topics/07-troubleshooting-escalation/notes.md` の注記を参照)。

## フォルダ構成

- `topics/` — 試験範囲ごとのノート(ドメイン番号順)
  - `01-prompting-task-execution/`
  - `02-output-evaluation-validation/`
  - `03-product-model-selection/`
  - `04-workflow-integration-solution-design/`
  - `05-configuration-knowledge-management/`
  - `06-governance-risk-responsible-use/`
  - `07-troubleshooting-escalation/`
- `practice-questions/` — 練習問題・模擬問題(オリジナル自作、実際の試験問題ではない)
- `mock-exam/` — `practice-questions/`と同じ問題セットを使った採点機能付きの模擬試験(出題順・選択肢順をランダム化し、解答後に自動採点)

## 参考リンク

- [Pearson VUE: Claude Certification Program](https://www.pearsonvue.com/us/en/anthropic.html)

## 進め方(たたき台)

1. `topics/`の7分野を配点の大きい順(2→4→6→1→3・5→7)に読み進め、要点をノートにまとめる
2. `practice-questions/`で理解度を確認する
3. `mock-exam/`で本番同様の通し形式で解き、採点結果とドメイン別正答数で弱点を確認する
