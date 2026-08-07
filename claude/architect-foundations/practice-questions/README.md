---
layout: default
title: 練習問題
parent: "Architect – Foundations"
nav_order: 99
---

# 練習問題

> **注意**: これは自己学習用にオリジナルで作成した練習問題です。実際の「Claude Certified Architect – Foundations」試験の問題そのものではありません(実試験の内容は非公開・NDA対象)。出題形式・難易度のイメージをつかむための模擬問題としてご利用ください。

各問題には出題ドメイン(01〜05)をタグ付けしています。実際の試験は英語で実施されるため、問題文・選択肢には英訳を併記しています。

---

### Q1 [ドメイン01: Agentic Architecture]

あるチームが、社内のリサーチタスク(複数の独立したWebソースを調査し、要点を統合したレポートを作る)をClaudeで自動化しようとしている。各ソースの調査は互いに依存せず、調査対象は5〜10件になることが多い。アーキテクトとして推奨すべき構成は?
*A team wants to automate an internal research task (investigating multiple independent web sources and producing a report that synthesizes the key points) using Claude. Research on each source is independent of the others, and there are typically 5-10 sources. As the architect, which configuration should you recommend?*

A. 1つのエージェントが全ソースを順番に調査し、そのまま1つの会話コンテキストにすべての調査結果を蓄積していく
*A. A single agent investigates all sources sequentially, accumulating all findings in one conversation context.*
B. オーケストレーターエージェントが各ソースの調査をサブエージェントに並列委譲し、各サブエージェントは要約したレポートのみをオーケストレーターに返す
*B. An orchestrator agent delegates each source's investigation to subagents in parallel, and each subagent returns only a summarized report to the orchestrator.*
C. 人間がすべてのソースを事前に手動で要約してからClaudeに渡す
*C. A human manually summarizes all sources in advance before passing them to Claude.*
D. 1つのエージェントがまず全ソースのURLリストを作成し、それを毎回全文コンテキストに含めながら1件ずつ処理する
*D. A single agent first creates a list of URLs for all sources, then processes them one at a time while including the full list in context every time.*

**正解: B**

独立して並列化可能なサブタスクであり、各調査の生の詳細情報はオーケストレーターに不要なため、サブエージェントへの委譲とコンテキストの要約返却が最も適切。Aは1つのコンテキストに生データが蓄積されウィンドウを圧迫し、Dも同様の問題を抱える。

---

### Q2 [ドメイン01: Agentic Architecture]

本番稼働中のエージェントが、外部の決済APIを呼び出して返金処理を行う機能を持つことになった。このエージェントは他にも、注文履歴の検索やFAQ回答など多数の低リスクな操作を自律的に行っている。アーキテクチャ上、最も適切な設計はどれか?
*A production agent is being given the ability to call an external payment API to process refunds. This same agent also autonomously performs many other low-risk operations, such as order history lookups and FAQ answers. From an architecture standpoint, which design is most appropriate?*

A. すべてのツール呼び出しについて、毎回人間の承認を必須にする
*A. Require human approval for every tool call, every time.*
B. 返金処理のような不可逆・金銭的影響のある操作にのみ人間の承認ゲートを設け、注文履歴検索やFAQ回答は自律実行を許可する
*B. Add a human approval gate only for irreversible, financially-impactful operations like refunds, while allowing autonomous execution for order history lookups and FAQ answers.*
C. 返金処理も含めてすべて完全自律で実行し、事後にログを監査する
*C. Execute everything, including refunds, fully autonomously and audit the logs afterward.*
D. 返金処理を行うツール自体をエージェントから完全に削除し、人間が別システムで処理する
*D. Remove the refund tool from the agent entirely and have a human process refunds in a separate system.*

**正解: B**

リスクベースでhuman-in-the-loopを設計するのが原則。全操作に承認を求める(A)は承認疲れを招き自律性のメリットを損なう。Cは不可逆な金銭操作を無承認で実行するリスクが高い。Dは過剰に保守的でエージェント化のメリットを放棄している。

---

### Q3 [ドメイン01: Agentic Architecture]

数時間にわたって動作し続けるコード移行エージェントを設計している。途中でプロセスがクラッシュした場合でも、最初からやり直さずに続きから再開できるようにしたい。最も適切な設計要素はどれか?
*You are designing a code migration agent that runs continuously for several hours. You want it to be able to resume from where it left off if the process crashes partway through, rather than starting over. Which design element is most appropriate?*

A. コンテキストウィンドウを可能な限り大きく確保する
*A. Reserve as large a context window as possible.*
B. 進捗状況や完了済みタスクを外部(ファイルやDBなど)に定期的にチェックポイントとして永続化する
*B. Periodically persist progress and completed tasks as checkpoints to an external store (a file, database, etc.).*
C. モデルにできるだけ詳細な計画を最初に一度だけ立てさせる
*C. Have the model create as detailed a plan as possible, just once at the start.*
D. リトライ回数の上限を設けない
*D. Set no upper limit on the number of retries.*

**正解: B**

長時間タスクの中断・再開には、状態を会話コンテキストだけに依存せず外部化するチェックポイント設計が必須。A・C・Dはクラッシュからの再開性を直接解決しない。

---

### Q4 [ドメイン01: Agentic Architecture]

あるエージェントシステムが、同じような単純作業(数十件の書類の分類)にマルチエージェント構成(オーケストレーター+専用サブエージェント数体)を採用したところ、シングルエージェントで処理していた頃よりトークンコストが大幅に増加し、レイテンシもさほど改善しなかった。原因として最も妥当な説明はどれか?
*An agent system adopted a multi-agent configuration (an orchestrator plus several specialized subagents) for a simple, repetitive task (classifying a few dozen documents), and token cost increased substantially compared to when it was handled by a single agent, with little latency improvement. What is the most plausible explanation?*

A. マルチエージェント構成は常にシングルエージェントよりコストが安くなるはずなので、実装にバグがある
*A. Multi-agent configurations should always be cheaper than single-agent ones, so there must be a bug in the implementation.*
B. タスクの分割粒度が細かすぎるだけで、マルチエージェント化自体に問題はない
*B. The task was simply split too finely; there is no inherent problem with going multi-agent.*
C. タスクに真の独立性・専門性の分離が乏しく、並列化のメリットが薄いのにエージェント間の委譲・コンテキスト複製のオーバーヘッドだけが乗った
*C. The task lacked genuine independence/specialization to separate, so the benefit of parallelization was minimal, while the overhead of inter-agent delegation and context duplication was still incurred.*
D. モデルのバージョンが古い
*D. The model version is outdated.*

**正解: C**

マルチエージェント化は並列化できる独立性の高いタスクでこそ効果を発揮する。単純な分類作業のように各サブタスクが軽量でオーケストレーションの意味が薄い場合、委譲や要約のオーバーヘッドがコスト増を招くだけになる。「並列化できるから」ではなく「独立性があるか」で判断すべき典型例。

---

### Q5 [ドメイン02: Tool Design & MCP]

社内システム用に、Claudeが呼び出すツール `update_record` を設計している。このツールは任意のテーブル名・任意のSQL文をパラメータとして受け取り、DBに対して実行する汎用設計になっている。アーキテクトとしてこの設計をレビューするとき、最も重要な懸念点は何か?
*You are designing a tool, `update_record`, for Claude to call against an internal system. It is designed generically, taking an arbitrary table name and an arbitrary SQL statement as parameters and executing them against the database. As the architect reviewing this design, what is the most important concern?*

A. ツール名が英語であること
*A. The tool name is in English.*
B. スキーマが自由入力(任意のSQL文字列)を許しており、最小権限の原則に反し誤用・悪用のリスクが高い
*B. The schema allows free-form input (an arbitrary SQL string), which violates the principle of least privilege and carries a high risk of misuse or abuse.*
C. レスポンス速度が遅いこと
*C. Response speed is slow.*
D. ツールの説明文が長すぎること
*D. The tool's description text is too long.*

**正解: B**

任意SQL実行を許す汎用ツールは強力だが、意図しないテーブルへの書き込みや破壊的操作を誘発しやすい。ツールは目的別に細分化し、スキーマを構造化・制限することで誤用リスクを下げるのがツール設計の基本原則。

---

### Q6 [ドメイン02: Tool Design & MCP]

社内の複数チームがそれぞれ異なるアプリケーション(Claude Desktop、独自の社内Webツール、Claude Code)から同じ社内ナレッジベースにアクセスできるようにしたい。ナレッジベースへのアクセスはネットワーク越しに提供され、複数クライアントから共有される想定である。MCPサーバーのトランスポートとして適切なのはどちらの方向性か、また理由は?
*Multiple internal teams want to access the same internal knowledge base from different applications (Claude Desktop, a custom internal web tool, Claude Code). Access to the knowledge base is provided over the network and shared by multiple clients. Which direction is appropriate for the MCP server's transport, and why?*

A. stdioトランスポート。ローカルプロセスなので実装がシンプルだから
*A. stdio transport, because it's a local process and the implementation is simple.*
B. リモート(HTTPベース)トランスポート。複数クライアント・複数ユーザーから共有アクセスされ、認証・認可をネットワーク越しに扱う必要があるため
*B. Remote (HTTP-based) transport, because it is shared by multiple clients/users and authentication/authorization must be handled over the network.*
C. トランスポートの選択はMCPの設計に影響しないので、どちらでもよい
*C. The choice of transport doesn't affect MCP's design, so either works.*
D. 各クライアントごとに専用のMCPサーバーをローカルに複製する
*D. Duplicate a dedicated MCP server locally for each individual client.*

**正解: B**

stdioはクライアントと同一マシン上で完結するローカル用途向け。複数クライアント・複数ユーザーによる共有アクセスと認証・認可が必要な場合はリモートのHTTPベーストランスポートが適切。

---

### Q7 [ドメイン03: Claude Code]

開発チームがClaude Codeを使ったCI上の自動コードレビューパイプラインを構築している。人間が張り付いていない非対話環境で実行するため、危険なコマンド(本番DBへの直接アクセスなど)が誤って実行されないことを機械的に保証したい。最も適切な設計要素はどれか?
*A development team is building an automated code review pipeline on CI using Claude Code. Since it runs in a non-interactive environment with no human watching, they want a mechanical guarantee that dangerous commands (e.g., direct access to the production database) can never be executed accidentally. Which design element is most appropriate?*

A. システムプロンプトに「危険なコマンドは実行しないこと」という指示を追加するだけで十分とする
*A. Simply adding an instruction to the system prompt saying "do not execute dangerous commands" is sufficient.*
B. フック(hooks)で危険なコマンドパターンを検知しブロックする仕組みを、モデルの判断とは独立に実装する
*B. Implement a mechanism using hooks that detects and blocks dangerous command patterns, independent of the model's judgment.*
C. モデルをより高性能なものに変更する
*C. Switch to a more capable model.*
D. レビュー結果を毎回人間が確認するまでパイプラインを待機させる(非対話運用の前提と矛盾するが許容する)
*D. Have the pipeline wait until a human reviews the results each time (this contradicts the non-interactive premise, but accept it anyway).*

**正解: B**

プロンプトによる指示はモデルの判断に依存し100%の強制力を持たない。コンプライアンス上必須の制約は、ツール実行を機械的に検査・ブロックできるフックに実装するのが正しい設計。Dは非対話実行という前提そのものを崩してしまう。

---

### Q8 [ドメイン03: Claude Code]

複数リポジトリを横断して働く開発チームが、Claude Codeの「許可するツール一覧」や「使用するMCPサーバー構成」をチーム全員で統一したい。個人ごとの設定のばらつきを避け、リポジトリを見れば誰でも同じ構成を再現できるようにしたいとき、最も適切なアプローチはどれか?
*A development team working across multiple repositories wants to unify Claude Code's "list of allowed tools" and "MCP server configuration" across the whole team. They want to avoid variation between individual settings, so that anyone can reproduce the same configuration just by looking at the repository. Which approach is most appropriate?*

A. 各開発者が自分のユーザーレベル設定に手動でメモを残し、口頭で共有する
*A. Each developer manually leaves notes in their own user-level settings and shares them verbally.*
B. チームで統一すべき許可ツール・MCPサーバー構成をプロジェクトレベルの設定としてリポジトリにコミットする
*B. Commit the allowed-tools and MCP server configuration that the team should standardize on as project-level settings in the repository.*
C. 全員が同じPCを使うことで設定を揃える
*C. Have everyone use the same PC to keep settings aligned.*
D. 設定の共有は不可能なので個々人の裁量に任せる
*D. Sharing settings is impossible, so leave it to each individual's discretion.*

**正解: B**

プロジェクトレベルの設定はリポジトリにコミットしてチームで共有できる。個人の好みはユーザーレベル、チームで統一すべきルールはプロジェクトレベルに置くのが基本方針。

---

### Q9 [ドメイン03: Claude Code]

ある組織でClaude Codeを段階的に導入する計画を立てている。最初のフェーズでは一部の開発者が個人利用で試し、良い設定パターン(許可ツール、フック、CLAUDE.mdの書き方)が見えてきた。次のフェーズとして最も妥当なアクションはどれか?
*An organization is planning a phased rollout of Claude Code. In the first phase, a few developers tried it individually, and good configuration patterns (allowed tools, hooks, how to write CLAUDE.md) began to emerge. What is the most reasonable action for the next phase?*

A. いきなり全社の全リポジトリに一律の設定を強制適用する
*A. Immediately force-apply a uniform configuration across every repository company-wide.*
B. 有効だった設定パターンをプロジェクト設定・フック・CLAUDE.mdとしてリポジトリに定着させ、チーム単位で標準化してから段階的に展開範囲を広げる
*B. Codify the effective configuration patterns into the repository as project settings, hooks, and CLAUDE.md, standardize at the team level, and then gradually widen the rollout.*
C. 個人利用のフェーズで得られた知見は展開時に不要なので破棄する
*C. Discard the knowledge gained from the individual-use phase, since it's not needed for the rollout.*
D. 導入は個人の自由に任せ、組織としての標準化は行わない
*D. Leave adoption to individual discretion and don't standardize at the organizational level.*

**正解: B**

個人利用→有効パターンの標準化(プロジェクト設定・フック・CLAUDE.mdへの定着)→段階的な展開という進め方が、リスクを抑えつつ組織的に定着させる現実的なロールアウト戦略。

---

### Q10 [ドメイン04: Prompt Engineering]

本番のカスタマーサポートエージェントのシステムプロンプトを運用しているチームが、モデルのバージョンアップ後にプロンプトを変更せずそのままにしていたところ、一部の応答品質が微妙に変化していることに気づいた。今後このようなリスクを防ぐために、アーキテクトとして導入すべき仕組みはどれか?
*A team operating a production customer-support agent's system prompt left the prompt unchanged after a model version upgrade, and later noticed that some response quality had subtly shifted. As the architect, what mechanism should be introduced to prevent this kind of risk going forward?*

A. モデルのバージョンアップ自体を今後禁止する
*A. Ban model version upgrades entirely going forward.*
B. プロンプトをバージョン管理下に置き、モデル更新時にも代表的な入力群に対する回帰テスト(evals)を実行して品質を検証する運用を整備する
*B. Put the prompt under version control, and establish a practice of running regression tests (evals) against a representative set of inputs — including at model update time — to verify quality.*
C. システムプロンプトをできるだけ短く一律にする
*C. Make the system prompt as short and uniform as possible.*
D. 品質変化は主観の問題なので特に対処しない
*D. Quality change is a subjective matter, so no particular action is needed.*

**正解: B**

プロンプトはコードと同様にバージョン管理し、モデル更新時を含め回帰テスト(evals)で品質を継続的に検証する運用が、本番システムにおけるプロンプトエンジニアリングの基本。モデル更新の禁止(A)は現実的でなく、長期的に不利益になる。

---

### Q11 [ドメイン04: Prompt Engineering]

下流システムがClaudeの出力をJSONとしてそのままパースして別システムに連携する設計になっている。まれにモデルの出力に説明文が混ざりパースエラーが起きることが分かった。アーキテクトとして取るべき対応として最も適切なものはどれか?
*A downstream system is designed to parse Claude's output directly as JSON and pass it to another system. It turns out that, on rare occasions, the model's output mixes in explanatory text, causing parse errors. As the architect, what is the most appropriate response?*

A. パースエラーが起きたら下流システムをクラッシュさせ、人間が気づけるようにする
*A. When a parse error occurs, let the downstream system crash so a human notices.*
B. 出力形式をプロンプトで明確に指示しつつ、アプリケーション側にスキーマ検証とパース失敗時のフォールバック(再試行やエラーハンドリング)を用意する
*B. Clearly specify the output format in the prompt, while also adding schema validation and a fallback (retry or error handling) on the application side for parse failures.*
C. モデルの出力は常に正しいと信頼し、検証層を省略してレイテンシを優先する
*C. Trust that the model's output is always correct, skip the validation layer, and prioritize latency.*
D. JSON出力の利用自体をやめ、すべて人間が目視で変換する
*D. Stop using JSON output altogether and have a human manually convert everything.*

**正解: B**

モデル出力を性善説で信頼せず、アプリケーション側に検証・フォールバックの層を設けるのが構造化出力設計の基本方針。プロンプト側の指示だけに頼らない、システムとしての防御的設計が求められる。

---

### Q12 [ドメイン05: Context Management]

長時間の会話を続けるカスタマーサポートエージェントで、システムプロンプトとツール定義は毎ターン共通だが、ユーザーの発言内容は毎回異なる。レイテンシとコストを削減するために、プロンプトキャッシュを最大限活用したい。プロンプト構造をどう設計すべきか?
*In a customer support agent that maintains a long-running conversation, the system prompt and tool definitions are the same on every turn, but the user's message content differs each time. To reduce latency and cost, you want to make maximum use of prompt caching. How should the prompt structure be designed?*

A. ユーザーの発言を常に先頭に置き、システムプロンプト・ツール定義を末尾に置く
*A. Always place the user's message first, with the system prompt and tool definitions at the end.*
B. 変化しないシステムプロンプト・ツール定義を先頭(固定プレフィックス)に置き、毎回変わるユーザー入力を末尾に置く
*B. Place the unchanging system prompt and tool definitions first (as a fixed prefix), with the user input that changes every time at the end.*
C. キャッシュ効率はプロンプト構造に依存しないので、順序は気にしなくてよい
*C. Cache efficiency doesn't depend on prompt structure, so ordering doesn't matter.*
D. 会話が進むたびにシステムプロンプトの内容を書き換える
*D. Rewrite the system prompt's content as the conversation progresses.*

**正解: B**

プロンプトキャッシュは先頭からの共通接頭辞に対して効く。固定部分を先頭、可変部分を末尾に置く構造がキャッシュヒット率を最大化し、コスト・レイテンシの両方を改善する。

---

### Q13 [ドメイン05: Context Management]

社内文書検索を伴うエージェントを設計している。文書全体(数千ページ相当)を毎回コンテキストに含めるロングコンテキスト戦略ではコストとレイテンシが許容できないため、RAGアーキテクチャを採用することにした。検索精度を高めるための設計判断として最も適切なものはどれか?
*You are designing an agent that involves searching internal documents. Since a long-context strategy that includes the entire document set (thousands of pages' worth) in context every time is unacceptable for cost and latency, you decide to adopt a RAG architecture. Which design decision is most appropriate for improving retrieval accuracy?*

A. 文書をできるだけ小さい固定長(例: 50文字ごと)に機械的に分割してチャンク化する
*A. Mechanically split documents into the smallest possible fixed length (e.g., every 50 characters) to create chunks.*
B. 意味的にまとまりのある単位(セクションなど)でチャンキングし、ベクトル検索とキーワード検索・メタデータフィルタを組み合わせたハイブリッド検索を行う
*B. Chunk by semantically coherent units (such as sections), and perform hybrid search combining vector search with keyword search and metadata filters.*
C. チャンキングは行わず、常に文書全体を検索対象とする
*C. Don't chunk at all, and always search the entire document.*
D. 検索は行わず、モデルの事前学習知識だけに頼る
*D. Don't perform retrieval at all, and rely only on the model's pretrained knowledge.*

**正解: B**

チャンクが小さすぎる・機械的すぎる分割(A)は文脈を失い検索精度を下げる。意味単位でのチャンキングと、ベクトル検索単体に頼らないハイブリッド検索の組み合わせが、RAGの検索精度を高める実践的なアプローチ。

---

### Q14 [ドメイン01: Agentic Architecture]

あるエージェントが外部APIを呼び出す際、レート制限エラー(429)と、認証情報が無効というエラー(401)の両方に遭遇する可能性がある。アーキテクトとして設計すべきエラー回復戦略の違いは何か?
*When an agent calls an external API, it may encounter both a rate-limit error (429) and an invalid-credentials error (401). As the architect, how should the error recovery strategies for these two differ?*

A. どちらのエラーも同じリトライロジックで一律に再試行し続ける
*A. Keep retrying both errors uniformly with the same retry logic.*
B. 429のような一過性エラーは指数バックオフで自動リトライし、401のような恒久的エラーは自動リトライせず人間へエスカレーションまたは設定修正を促す
*B. Automatically retry transient errors like 429 with exponential backoff, while not auto-retrying permanent errors like 401 — instead escalate to a human or prompt a configuration fix.*
C. すべてのエラーを即座に人間にエスカレーションし、自動リトライは一切行わない
*C. Immediately escalate every error to a human, with no automatic retries at all.*
D. すべてのエラーを無視してタスクを続行する
*D. Ignore all errors and continue the task.*

**正解: B**

エラーの性質(一過性か恒久的か)によって回復戦略を分けるのがエージェントのエラー回復設計の基本。認証エラーのように再試行しても解決しない恒久的エラーを自動リトライし続けるのは無駄であり、無限ループのリスクもある。
