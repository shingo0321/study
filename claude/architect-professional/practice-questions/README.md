---
layout: default
title: 練習問題
parent: "Architect – Professional"
nav_order: 99
---

# 練習問題

> **注意**: これは自己学習用に作成した**オリジナルの模擬問題**であり、Anthropic公式の「Claude Certified Architect – Professional」試験の実際の出題内容ではありません。実際の試験問題・出題形式とは異なります。学習の理解度確認のみを目的としています。

各問題には出題ドメイン([01]〜[07]、`topics/`のフォルダ番号に対応)をタグ付けしています。実際の試験は英語で実施されるため、問題文・選択肢には英訳を併記しています。

---

### Q1 ([03: Integration](../topics/03-integration/notes.html))

*Multiple internal teams have each independently issued their own direct Anthropic API keys and built their own retry/logging implementations to call Claude. Months later, cost overruns and a security audit finding (some cases of API keys hardcoded directly into repositories) have become a problem. As the architect, what is the most appropriate next step?*<br><span style="color:#8a8a8a">社内の複数チームが、それぞれ独自にAnthropic直接APIキーを発行し、独自のリトライ・ロギング実装でClaudeを呼び出すようになっている。数ヶ月後、コスト超過とセキュリティ監査での指摘(APIキーがリポジトリに直書きされている事例あり)が問題化した。アーキテクトとして最も適切な次の一手はどれか。</span>

*A. Immediately ban all teams from using direct API keys and force a migration to Bedrock.*<br><span style="color:#8a8a8a">A. 全チームに対し、直接APIキーの利用を即時禁止し、Bedrock経由に強制移行させる</span><br>
*B. Set up a shared internal gateway/platform layer that unifies authentication, logging, cost measurement, and secrets management, and move each team to access Claude through it.*<br><span style="color:#8a8a8a">B. 認証・ロギング・コスト計測・シークレット管理を共通化した社内ゲートウェイ/プラットフォーム層を用意し、各チームはそこ経由でアクセスする体制に移行する</span><br>
*C. Distribute API-key-management best-practice documentation to each team and rely on self-reported compliance checks.*<br><span style="color:#8a8a8a">C. 各チームにAPIキー管理のベストプラクティス資料を配布し、自己申告でのコンプライアンス確認に任せる</span><br>
*D. Revoke API access from the teams with the largest cost overruns.*<br><span style="color:#8a8a8a">D. コスト超過が大きいチームからAPIアクセスを剥奪する</span>

**正解: B**

**解説**: 個別チームでの再実装によるガバナンス欠如が根本原因であり、07章・03章で扱う「内部プラットフォーム化」による認証・ロギング・シークレット管理の共通化が本質的な解決策。Aは移行先を限定しすぎ根本原因(統制の欠如)に対処していない。

---

### Q2 ([03: Integration](../topics/03-integration/notes.html))

*A financial institution is building a batch job with Claude that classifies hundreds of thousands of documents overnight; real-time responsiveness is not required. Latency requirements are loose, but cost should be minimized. Which integration pattern is most suitable?*<br><span style="color:#8a8a8a">金融機関が、リアルタイム性は不要だが夜間に数十万件のドキュメントを分類するバッチジョブをClaudeで構築している。レイテンシ要件は緩いが、コストを最小化したい。最も適した統合パターンはどれか。</span>

*A. Process items one at a time in real time using the streaming API.*<br><span style="color:#8a8a8a">A. ストリーミングAPIで1件ずつリアルタイムに処理する</span><br>
*B. Use a batch-processing API/discount and process everything together asynchronously.*<br><span style="color:#8a8a8a">B. バッチ処理向けのAPI/割引を活用し、非同期でまとめて処理する</span><br>
*C. Parallelize with a multi-agent orchestrator-worker pattern.*<br><span style="color:#8a8a8a">C. マルチエージェントのオーケストレーター・ワーカーパターンで並列化する</span><br>
*D. Launch a separate MCP server for each individual document.*<br><span style="color:#8a8a8a">D. 各ドキュメントごとに個別のMCPサーバーを起動する</span>

**正解: B**

**解説**: リアルタイム性が不要な大量処理には、バッチ処理用エンドポイントや割引を活用するのがコスト最適。ストリーミングは体感レイテンシ改善が目的でありこのユースケースには不要なオーバーヘッドとなる。

---

### Q3 ([03: Integration](../topics/03-integration/notes.html))

*An enterprise is considering an architecture that uses both the direct Anthropic API and Claude via AWS Bedrock together. What is the most appropriate primary motivation for this design?*<br><span style="color:#8a8a8a">あるエンタープライズが、Anthropic直接APIとAWS Bedrock経由のClaudeを併用するアーキテクチャを検討している。この設計の主な動機として最も適切なものはどれか。</span>

*A. Because going through Bedrock is always cheaper.*<br><span style="color:#8a8a8a">A. Bedrock経由の方が常に安価だから</span><br>
*B. Because multi-provider redundancy avoids a single point of failure, and it also integrates with the existing AWS IAM/governance framework.*<br><span style="color:#8a8a8a">B. マルチプロバイダ冗長化によって単一障害点を避け、既存のAWS IAM/ガバナンス体制とも統合できるため</span><br>
*C. Because some model capabilities are available only via Bedrock.*<br><span style="color:#8a8a8a">C. Bedrock経由でしか利用できないモデル機能があるため</span><br>
*D. Because the direct API has no rate limits, so it is used only as a backup for Bedrock.*<br><span style="color:#8a8a8a">D. 直接APIはレート制限がないため、Bedrockのバックアップとしてのみ使う</span>

**正解: B**

**解説**: マルチプロバイダ構成の主目的は可用性の冗長化と、既存クラウドのIAM・コンプライアンス体制との統合しやすさ。価格やレート制限の一律優劣を前提にするのは誤り。

---

### Q4 ([01: Solution Design & Architecture](../topics/01-solution-design-architecture/notes.html))

*You are designing an internal inquiry-response agent. The requirements are: "a human must always give final approval for processes with financial impact, such as refund decisions" and "the response history must be auditable." Which architecture pattern is most suitable?*<br><span style="color:#8a8a8a">社内問い合わせ対応エージェントを設計中。要件は「返金判断など金銭的影響のある処理は必ず人間が最終承認する」「対応履歴は監査可能でなければならない」というもの。最も適したアーキテクチャパターンはどれか。</span>

*A. A fully autonomous agentic loop that delegates all decisions to the agent.*<br><span style="color:#8a8a8a">A. 完全自律のエージェント型ループで、全ての判断をエージェントに委ねる</span><br>
*B. A workflow-based design with deterministic control flow, inserting a human-approval step only at steps with financial impact.*<br><span style="color:#8a8a8a">B. 決定論的な制御フローを持つワークフロー型とし、金銭的影響のあるステップでのみ人間承認ステップを挟む設計</span><br>
*C. Automatically approve using LLM-as-judge.*<br><span style="color:#8a8a8a">C. LLM-as-judgeで自動承認する</span><br>
*D. Build using only a rule-based system, with no LLM at all.*<br><span style="color:#8a8a8a">D. ルールベースシステムのみで構築し、LLMを一切使わない</span>

**正解: B**

**解説**: 監査性・制御性が重視される要件では、エージェント型の完全自律ループより、決定論的な制御フローの中に必要なステップでのみ人間承認を組み込むワークフロー型の方が適する。

---

### Q5 ([01: Solution Design & Architecture](../topics/01-solution-design-architecture/notes.html))

*A team gave a single agent more than 20 different tools to handle a complex task, and tool-selection accuracy dropped while latency also worsened. What is the most reasonable design change to consider next?*<br><span style="color:#8a8a8a">あるチームが単一エージェントに20種類以上のツールを持たせて複雑なタスクを処理させたところ、ツール選択の精度が下がり、レイテンシも悪化した。次に検討すべき設計変更として最も妥当なものはどれか。</span>

*A. Add even more tools to increase coverage.*<br><span style="color:#8a8a8a">A. さらにツールを追加してカバレッジを上げる</span><br>
*B. Consider splitting functionality into subagents by task nature, in a multi-agent configuration with an orchestrator delegating to them.*<br><span style="color:#8a8a8a">B. タスクの性質ごとにサブエージェントへ機能を分割し、オーケストレーターが委譲するマルチエージェント構成を検討する</span><br>
*C. Stop always including all tools in the prompt, and raise the temperature parameter.*<br><span style="color:#8a8a8a">C. 全てのツールを常にプロンプトに含めるのをやめ、温度パラメータを上げる</span><br>
*D. Fixing the model to the top tier will naturally solve it.*<br><span style="color:#8a8a8a">D. モデルを最上位ティアに固定すれば自然に解決する</span>

**正解: B**

**解説**: 単一エージェントへのツール過集中はコンテキスト汚染・選択精度低下を招きやすい典型例。疎結合なサブエージェントへの分割は01章のマルチエージェント設計の代表的な対処パターン。ただし過剰な分割もアンチパターンである点も踏まえ、必要な範囲での分割が前提。

---

### Q6 ([02: Claude Models, Prompting & Context Engineering](../topics/02-models-prompting-context-engineering/notes.html))

*A system needs to handle both a high-frequency, low-difficulty inquiry classification task and a low-frequency, high-difficulty contract review task. Which design is most appropriate for keeping costs down while maintaining quality?*<br><span style="color:#8a8a8a">高頻度・低難度な問い合わせ分類タスクと、低頻度・高難度な契約書レビュータスクを同じシステムで扱う必要がある。コストを抑えつつ品質を維持する設計として最も適切なものはどれか。</span>

*A. Uniformly apply the top-tier model to every request.*<br><span style="color:#8a8a8a">A. 全リクエストに最上位モデルを一律適用する</span><br>
*B. Uniformly apply a lightweight model to every request, prioritizing cost above all.*<br><span style="color:#8a8a8a">B. 全リクエストに軽量モデルを一律適用し、コストを最優先する</span><br>
*C. Design a routing scheme that assesses input difficulty, sending routine classification to a lightweight model and complex contract review to a higher tier.*<br><span style="color:#8a8a8a">C. 入力の難易度を判定し、定型的な分類は軽量モデルへ、複雑な契約書レビューは上位モデルへ振り分けるルーティング設計を行う</span><br>
*D. Select models randomly to balance load.*<br><span style="color:#8a8a8a">D. ランダムにモデルを選択して負荷分散する</span>

**正解: C**

**解説**: モデルルーティング(カスケード含む)は、タスク難易度に応じてモデルティアを使い分けることでコストと品質のバランスを取る本番規模の標準パターン。

---

### Q7 ([02: Claude Models, Prompting & Context Engineering](../topics/02-models-prompting-context-engineering/notes.html))

*In a RAG-like system that answers user questions by including a large, static internal knowledge base document in the prompt every time, costs are higher than expected. Daily access frequency is high, and the document is updated infrequently. Which optimization is most effective?*<br><span style="color:#8a8a8a">社内ナレッジベース(長大な固定ドキュメント)を毎回プロンプトに含めてユーザーの質問に答えるRAG的システムで、コストが想定より高い。1日あたりのアクセス頻度は高く、ドキュメントの更新頻度は低い。最も有効な最適化策はどれか。</span>

*A. Summarize the document and always use only the shortened version (accepting some degradation in content).*<br><span style="color:#8a8a8a">A. ドキュメントを要約して常に短縮版のみを使う(内容の劣化は許容する)</span><br>
*B. Use prompt caching, placing the large, static document portion at a fixed position at the start of the prompt so it is cacheable.*<br><span style="color:#8a8a8a">B. プロンプトキャッシュを活用し、静的な大きいドキュメント部分をキャッシュ対象として固定順序でプロンプト先頭に配置する</span><br>
*C. It's sufficient to summarize the user's question every time to reduce token count.*<br><span style="color:#8a8a8a">C. ユーザーの質問文を毎回要約してトークン数を削れば十分</span><br>
*D. Reduce the maximum output token count.*<br><span style="color:#8a8a8a">D. 出力トークンの最大値を減らす</span>

**正解: B**

**解説**: 「静的な大きい前置き+高頻度アクセス」はプロンプトキャッシュの経済効果が最も出やすいパターン。キャッシュは前方一致で効くため、変化しない部分を先頭固定で配置する設計が前提となる。

---

### Q8 ([04: Evaluation, Testing & Optimization](../topics/04-evaluation-testing-optimization/notes.html))

*You want to validate quality before deploying a new prompt to production. It's a summarization task with no single "correct answer," and you want to evaluate it along three axes: accuracy, completeness, and tone. Which evaluation method is most suitable?*<br><span style="color:#8a8a8a">新しいプロンプトを本番投入する前に品質を検証したい。要約タスクであり、「唯一の正解」がなく、正確性・網羅性・トーンの3軸で評価したい。最も適した評価方式はどれか。</span>

*A. Automated scoring based solely on exact match of the output.*<br><span style="color:#8a8a8a">A. 出力の完全一致(exact match)による自動採点のみ</span><br>
*B. Design a multi-axis rubric and score using LLM-as-judge or human evaluation. Human evaluation is also used to validate the LLM-as-judge itself.*<br><span style="color:#8a8a8a">B. 複数軸のルーブリックを設計し、LLM-as-judgeまたは人手評価で採点する。人手評価はLLM-as-judgeの妥当性検証にも使う</span><br>
*C. Use only the number of user complaints as the metric.*<br><span style="color:#8a8a8a">C. ユーザーからの苦情件数だけを指標にする</span><br>
*D. No evaluation is needed; a visual check alone is sufficient.*<br><span style="color:#8a8a8a">D. 評価は不要で、目視確認のみで十分</span>

**正解: B**

**解説**: 唯一の正解がない生成タスクでは、正確性・網羅性・トーンなど複数軸のルーブリックに分解した評価が定石。LLM-as-judgeはスケールする一方、判定基準や判定者自体の妥当性を人手でメタ評価する必要がある。

---

### Q9 ([04: Evaluation, Testing & Optimization](../topics/04-evaluation-testing-optimization/notes.html))

*In a production agent system, costs suddenly spiked one day, and a later investigation found that some requests had fallen into an infinite loop of repeated tool calls. Which combination of measures is most directly effective for preventing recurrence?*<br><span style="color:#8a8a8a">本番のエージェントシステムで、ある日突然コストが急増し、後から調べると一部のリクエストがツール呼び出しを繰り返す無限ループに陥っていたことが判明した。再発防止のために最も直接的に有効な組み合わせはどれか。</span>

*A. Fix the model to a lightweight tier.*<br><span style="color:#8a8a8a">A. モデルを軽量ティアに固定する</span><br>
*B. Add guardrails such as a maximum tool-call count and maximum execution time, and add alerts to the monitoring infrastructure to detect abnormal cost spikes.*<br><span style="color:#8a8a8a">B. 最大ツール呼び出し回数・最大実行時間などのガードレールを設け、異常なコスト急増を検知するアラートを監視基盤に追加する</span><br>
*C. Switch all requests to manual human review.*<br><span style="color:#8a8a8a">C. 全リクエストを人手レビューに切り替える</span><br>
*D. Disable prompt caching.*<br><span style="color:#8a8a8a">D. プロンプトキャッシュを無効化する</span>

**正解: B**

**解説**: エージェント型ループの暴走対策は、01章のステップ数/時間の上限設計と、04章の可観測性(コスト異常のアラート)を組み合わせて初めて実効性を持つ。

---

### Q10 ([05: Governance, Safety & Risk Management](../topics/05-governance-safety-risk/notes.html))

*A healthcare startup is building an agent that summarizes patient intake information to generate a draft medical chart. There's a risk that some of the generated draft gets adopted as-is before a doctor reviews it. Which governance design is most appropriate?*<br><span style="color:#8a8a8a">医療系スタートアップが、患者の問診内容を要約してカルテ下書きを生成するエージェントを構築している。生成された下書きは医師が確認前に一部そのまま採用されるリスクがある。ガバナンス設計として最も適切なものはどれか。</span>

*A. Operate with no human involvement at all (human-out-of-the-loop), prioritizing generation speed.*<br><span style="color:#8a8a8a">A. 完全に人間の関与なし(human-out-of-the-loop)で運用し、生成速度を優先する</span><br>
*B. Classify it as a high-impact use case in the risk tiering, design it as human-in-the-loop with mandatory final review by a doctor, and also verify medical regulatory requirements around PII handling and retention period.*<br><span style="color:#8a8a8a">B. 影響度の高いユースケースとしてリスク階層化し、医師による最終確認を必須とするhuman-in-the-loop設計とし、PIIの取り扱い・保存期間についても医療規制要件を確認する</span><br>
*C. No guardrails are needed; leave it to the model's own safety.*<br><span style="color:#8a8a8a">C. ガードレールは不要で、モデル自体の安全性に任せる</span><br>
*D. Don't include patient data in the prompt at all, and have it respond using only general medical knowledge.*<br><span style="color:#8a8a8a">D. 患者データはプロンプトに含めず、一般的な医学知識のみで応答させる</span>

**正解: B**

**解説**: 医療・金銭など影響度の高い領域では、リスク階層化に基づき人間の最終承認を必須とする設計が原則。加えてPII・データレジデンシー等の規制対応も統合設計に組み込む必要がある。

---

### Q11 ([05: Governance, Safety & Risk Management](../topics/05-governance-safety-risk/notes.html))

*Multiple internal departments have begun independently connecting third-party MCP servers. One server had an unclear provider and vague documentation of its permission scope. As the architect, what is the most appropriate response?*<br><span style="color:#8a8a8a">社内で複数の部門が独自にサードパーティ製MCPサーバーを接続し始めている。あるサーバーは提供元が不明瞭で、権限スコープの説明も曖昧だった。アーキテクトとして取るべき最も適切な対応はどれか。</span>

*A. Since MCP is a standard protocol, freely allow connections regardless of provider.*<br><span style="color:#8a8a8a">A. MCPは標準プロトコルなので提供元を問わず自由に接続を許可する</span><br>
*B. Maintain a centrally-managed registry of approved MCP servers, and introduce a governance process that reviews provider trustworthiness, permission scope, and auditability beforehand.*<br><span style="color:#8a8a8a">B. 中央でMCPサーバーの承認済みレジストリを整備し、提供元の信頼性・権限スコープ・監査可能性を事前レビューするガバナンスプロセスを導入する</span><br>
*C. Ban the use of MCP entirely, company-wide.*<br><span style="color:#8a8a8a">C. MCPの利用自体を全社的に禁止する</span><br>
*D. Leave it entirely to each department's discretion, requiring only after-the-fact reporting.*<br><span style="color:#8a8a8a">D. 各部門の裁量に完全に任せ、事後報告のみを求める</span>

**正解: B**

**解説**: MCPサーバーはツール実行の窓口でありサプライチェーンリスクになり得る。組織規模での統合では中央レジストリによる事前承認・権限スコープレビューのガバナンスが必要(03章・05章)。

---

### Q12 ([05: Governance, Safety & Risk Management](../topics/05-governance-safety-risk/notes.html))

*An incident occurred where a production agent mistakenly sent inappropriate content to a customer. What should be prioritized first in the initial response?*<br><span style="color:#8a8a8a">本番のエージェントが誤って顧客に不適切な内容を送信するインシデントが発生した。初動対応として最も優先すべきものはどれか。</span>

*A. Immediately start only a detailed technical investigation into the cause, while keeping the system running.*<br><span style="color:#8a8a8a">A. 直ちに原因究明のための詳細な技術調査だけを開始し、システムは稼働継続させる</span><br>
*B. Roll back the problematic prompt/model version or stop it with a kill switch (containment), then conduct a blameless postmortem, and appropriately escalate to legal, PR, and other relevant parties.*<br><span style="color:#8a8a8a">B. 問題のあるプロンプト/モデルバージョンをロールバックまたはkill switchで停止し(封じ込め)、その後に事後分析(blameless postmortem)を行い、法務・広報等への適切なエスカレーションを行う</span><br>
*C. Pursue individual blame, and leave prevention of recurrence to that person improving their own attentiveness.*<br><span style="color:#8a8a8a">C. 個人の責任追及を行い、再発防止は本人の注意力向上に委ねる</span><br>
*D. Say nothing and just watch quietly.*<br><span style="color:#8a8a8a">D. 何もアナウンスせず静観する</span>

**正解: B**

**解説**: インシデント対応の基本順序は「検知→封じ込め(kill switch/ロールバック)→事後分析→エスカレーション」。個人追及ではなくblameless postmortemで再発防止に落とし込むのが定石。

---

### Q13 ([06: Stakeholder Communication & Lifecycle Management](../topics/06-stakeholder-communication-lifecycle/notes.html))

*An architect is going to propose adopting a new agent system at an executive meeting. Technically, the design uses a cutting-edge model, but leadership's main concerns are risk and cost. Which way of structuring the presentation is most effective?*<br><span style="color:#8a8a8a">エグゼクティブ会議で、あるアーキテクトが新しいエージェントシステムの導入を提案することになった。技術的には最先端モデルを使う設計だが、経営層の関心は主にリスクとコストにある。最も効果的なプレゼンの組み立て方はどれか。</span>

*A. Focus mainly on technical advantages, such as the model's parameter count and benchmark scores.*<br><span style="color:#8a8a8a">A. モデルのパラメータ数やベンチマークスコアなど技術的優位性を中心に説明する</span><br>
*B. Explain, in terms of business impact, the quantitative basis for quality from eval results (success rate/error rate), the projected cost (on a TCO basis), and the risk tier with its corresponding level of human involvement.*<br><span style="color:#8a8a8a">B. eval結果(成功率・エラー率)による品質の定量的根拠、想定コスト(TCOベース)、リスク階層と対応する人間関与レベルを、ビジネス影響の言葉で説明する</span><br>
*C. Withhold technical details and skip the explanation on the premise that "it's fine because it's AI."*<br><span style="color:#8a8a8a">C. 技術詳細は伏せ、「AIだから大丈夫」という前提で説明を省略する</span><br>
*D. Base the argument solely on the fact that competitors have also adopted it.*<br><span style="color:#8a8a8a">D. 競合他社も導入しているという事実のみを根拠にする</span>

**正解: B**

**解説**: 経営層への説明は技術詳細でなく、定量的な品質根拠・コスト・リスク対応をビジネス価値の言葉に翻訳して伝えることが中核スキル(06章)。

---

### Q14 ([06: Stakeholder Communication & Lifecycle Management](../topics/06-stakeholder-communication-lifecycle/notes.html))

*For an AI assistant feature planned for company-wide rollout, frontline departments have already voiced concerns before launch that "people won't know how to use it and it won't stick." What is the most appropriate response?*<br><span style="color:#8a8a8a">全社展開を予定しているAIアシスタント機能について、現場部門から「使い方が分からず定着しない」という懸念が導入前から出ている。最も適切な対応はどれか。</span>

*A. It's sufficient to create an FAQ after rollout; no advance action is needed.*<br><span style="color:#8a8a8a">A. 展開後にFAQを作成すれば十分であり、事前の対応は不要</span><br>
*B. Involve the target departments from the earliest design stage (co-design), and build into the rollout plan a structure with change champions in each department providing training and grassroots adoption support.*<br><span style="color:#8a8a8a">B. 設計初期段階から対象部門を巻き込み(co-design)、各部門にチェンジチャンピオンを置いてトレーニングと草の根の定着支援を行う体制を展開計画に組み込む</span><br>
*C. Ignore frontline concerns and force adoption via top-down executive mandate.*<br><span style="color:#8a8a8a">C. 現場の懸念は無視し、経営トップダウンで強制利用させる</span><br>
*D. Exclude departments where adoption doesn't stick from the rollout.*<br><span style="color:#8a8a8a">D. 定着しない部門は展開対象から除外する</span>

**正解: B**

**解説**: 変更管理の基本は現場の早期巻き込み(co-design)とチェンジチャンピオンによる草の根定着支援。トップダウン強制は当事者意識を損ない、長期的な定着率を下げやすい。

---

### Q15 ([06: Stakeholder Communication & Lifecycle Management](../topics/06-stakeholder-communication-lifecycle/notes.html))

*Anthropic has announced that the model version currently in production use will be deprecated in a few months. What should the architect address first?*<br><span style="color:#8a8a8a">Anthropicが、現在本番で利用中のモデルバージョンについて数ヶ月後の廃止(deprecation)を予告した。アーキテクトとして最初に着手すべきことはどれか。</span>

*A. Ignore the deprecation notice and do nothing until the deprecation date.*<br><span style="color:#8a8a8a">A. 廃止予告を無視し、廃止日まで何もしない</span><br>
*B. Take inventory of the affected prompts, evaluation sets, and system prompts, and draw up an early plan for regression testing on the successor model and a phased migration.*<br><span style="color:#8a8a8a">B. 影響を受けるプロンプト・評価セット・システムプロンプトの棚卸しを行い、後継モデルでの回帰テスト・段階的移行計画を早期に立てる</span><br>
*C. Immediately shut down all systems.*<br><span style="color:#8a8a8a">C. 直ちに全システムを停止する</span><br>
*D. In response to the deprecation notice, independently fork the model and switch to running it in-house.*<br><span style="color:#8a8a8a">D. 廃止予告に対し、独自にモデルをフォークして自社運用に切り替える</span>

**正解: B**

**解説**: モデル廃止は定期的に発生するイベントであり、影響範囲の棚卸しと回帰テストを伴う計画的な移行が必要(06章のベンダー関係管理・ライフサイクル管理)。

---

### Q16 ([07: Developer Productivity & Operational Enablement](../topics/07-developer-productivity-operational-enablement/notes.html))

*Multiple development teams are each launching projects with their own agent implementation patterns, resulting in inconsistent implementation quality for authentication, logging, and guardrails. What is the most effective measure for the platform team to take?*<br><span style="color:#8a8a8a">複数の開発チームが、それぞれ独自のエージェント実装パターンでプロジェクトを立ち上げており、認証・ロギング・ガードレールの実装品質にばらつきが出ている。プラットフォームチームが取るべき最も効果的な施策はどれか。</span>

*A. Continue an ad hoc approach of conducting individual implementation reviews for every team and pointing out issues each time.*<br><span style="color:#8a8a8a">A. 全チームに個別に実装レビューを行い、都度指摘する場当たり的な対応を続ける</span><br>
*B. Establish a golden path (standard template) with authentication, logging, evaluation hooks, and guardrails built in from the start, with a lightweight exception process only for cases that deviate from the standard.*<br><span style="color:#8a8a8a">B. 認証・ロギング・評価フック・ガードレールをあらかじめ組み込んだゴールデンパス(標準テンプレート)を整備し、標準から外れる場合のみ軽量な例外プロセスを設ける</span><br>
*C. Temporarily ban launching new projects entirely.*<br><span style="color:#8a8a8a">C. 新規プロジェクトの立ち上げを一時的に全面禁止する</span><br>
*D. Don't standardize at all, in order to maximize each team's discretion.*<br><span style="color:#8a8a8a">D. 各チームの裁量を最大化するため、標準化は行わない</span>

**正解: B**

**解説**: ゴールデンパス/テンプレートにガバナンス要件を組み込み「安全な作り方が最も簡単な作り方」にすることが、開発者生産性とガバナンスを両立させる07章の中核パターン。個別レビューの都度対応はスケールしない。
