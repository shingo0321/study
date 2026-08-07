---
layout: default
title: 練習問題
parent: "Associate – Foundations"
nav_order: 99
---

# 練習問題

> **注記**: 以下はすべて自己学習用に作成したオリジナルの練習問題であり、Anthropic公式の実際の試験問題ではありません。出題形式・分野配分をイメージするための参考としてのみ利用してください。

各問題には出題分野([1]〜[7]、`topics/`の番号に対応)をタグ付けしています。実際の試験は英語で実施されるため、問題文・選択肢には英訳を併記しています。

---

## 問1 [2: 出力の評価と検証]

Claudeに社内規程に関する質問をしたところ、実在しない条項番号を挙げて自信満々に回答した。この現象を防ぐための対策として**最も適切でないもの**はどれか。
*When asked about internal company regulations, Claude confidently answered by citing a non-existent article number. Which of the following is the LEAST appropriate measure to prevent this?*

A. 該当する社内規程の原文をプロンプトに含め、その範囲内で回答するよう指示する
*A. Include the actual text of the relevant regulation in the prompt and instruct Claude to answer only within that scope.*
B. 「わからない場合は分からないと明記してよい」と指示に加える
*B. Add an instruction allowing Claude to explicitly say "I don't know" when it doesn't know.*
C. 回答の根拠となる条文箇所を引用させるよう指示する
*C. Instruct Claude to quote the specific clause that supports its answer.*
D. より断定的な口調で回答するようプロンプトの語調を強める
*D. Strengthen the prompt's tone to make Claude answer more assertively.*

**正解: D**

**解説**: 断定的な口調を強めることはハルシネーション対策にならず、むしろ根拠のない断定を助長しかねない。根拠資料の提供、「わからない」を許容する指示、出典引用の要求はいずれも有効なハルシネーション対策である。

---

## 問2 [2: 出力の評価と検証]

Claudeの出力品質を評価する際の観点として**適切でないもの**を1つ選べ。
*Which of the following is NOT an appropriate criterion for evaluating the quality of Claude's output? Choose one.*

A. 正確性(事実として正しいか)
*A. Accuracy (whether it is factually correct)*
B. 完全性(求められた要素が漏れなく含まれているか)
*B. Completeness (whether all required elements are included without omission)*
C. 生成に要したトークン数の多さ
*C. The number of tokens used to generate the output*
D. 関連性(依頼内容に的確に答えているか)
*D. Relevance (whether it accurately addresses the request)*

**正解: C**

**解説**: トークン数の多さ自体は品質の指標ではない。出力品質は正確性・関連性・完全性・一貫性・有用性といった観点で評価する。

---

## 問3 [2: 出力の評価と検証](複数選択)

Claudeの出力を業務で採用する前に、人間による入念なファクトチェックを特に優先すべきケースを**すべて**選べ。
*Before adopting Claude's output for business use, select ALL cases where careful human fact-checking should be especially prioritized.*

A. 社外に公開する数値を含むプレスリリースの下書き
*A. A press release draft containing figures to be published externally*
B. 個人的な読書メモのブレインストーミング
*B. Brainstorming for personal reading notes*
C. 法的拘束力を持つ契約書の条項案
*C. Draft clauses for a legally binding contract*
D. 社内向けアイデア出しの箇条書き
*D. A bullet-point list for internal idea generation*

**正解: A, C**

**解説**: 対外公開・法的拘束力があるなど、誤りの影響が大きい成果物は必ず人間の検証を挟むべきである。個人的なメモや社内のアイデア出しは相対的にリスクが低い。

---

## 問4 [4: ワークフロー統合とソリューション設計]

毎日大量に届く問い合わせメールを、緊急度別に一次仕分けし、対応方針の最終決定は担当者が行う、というワークフローを設計している。この設計の考え方として最も適切なものはどれか。
*You are designing a workflow that triages a high daily volume of inquiry emails by urgency, while a human staff member makes the final decision on how to respond. Which of the following best describes this design approach?*

A. Claudeに最終的な返信送付まで完全に自動で任せるべきである
*A. Claude should be left to fully automate the process, including sending the final reply.*
B. Claudeには一次分類・下書き作成のみを任せ、最終判断は人間が担う役割分担が適切である
*B. It is appropriate to have Claude handle only initial classification and draft creation, while a human makes the final decision.*
C. 問い合わせ対応にAIを使うこと自体避けるべきである
*C. Using AI for inquiry handling should be avoided altogether.*
D. 全件を必ずOpusクラスの最上位モデルで処理すべきである
*D. Every case must be processed with a top-tier model such as Opus.*

**正解: B**

**解説**: Claudeを「一次案・下書きの生成」に使い、人間が最終判断・承認を行うhuman-in-the-loop設計が典型的な安全なワークフロー設計である。

---

## 問5 [4: ワークフロー統合とソリューション設計]

複雑な業務プロセスにClaudeを組み込む際の設計として、最も信頼性を高める考え方はどれか。
*When incorporating Claude into a complex business process, which design approach most increases reliability?*

A. 一つの巨大なプロンプトに全工程の指示をまとめて一括処理させる
*A. Combine instructions for the entire process into one giant prompt and process it all at once.*
B. 工程ごとにタスクを分解し、各工程の出力を検証してから次工程に進める
*B. Break the task down by step and verify the output of each step before moving to the next.*
C. 検証は最終成果物に対してのみ行えば十分である
*C. It is sufficient to verify only the final deliverable.*
D. 工程分解すると処理が遅くなるため避けるべきである
*D. Breaking the process into steps should be avoided because it slows processing down.*

**正解: B**

**解説**: 複雑なタスクは工程ごとに分解し、各ステップの出力を確認しながら進める方が誤りの発見・修正がしやすく、全体の信頼性が高まる。

---

## 問6 [4: ワークフロー統合とソリューション設計]

Claudeの導入に**向いていない**業務の特徴として最も適切なものはどれか。
*Which of the following best describes a type of task that is NOT well-suited to adopting Claude?*

A. 定型的なメール文面の下書き作成
*A. Drafting routine email text*
B. 繰り返し発生する文書の要約作業
*B. Recurring document summarization work*
C. 誤りの許容度が極めて低い、単独での最終的な安全性判断
*C. A final, standalone safety judgment with an extremely low tolerance for error*
D. 過去の類似文書を参考にした一次案の生成
*D. Generating an initial draft based on past similar documents*

**正解: C**

**解説**: 誤りの影響が大きく許容度が低い最終判断をClaude単独に委ねるのは不適切。Claudeはあくまで人間の意思決定を支援する位置づけが基本。

---

## 問7 [1: プロンプト設計とタスク実行]

出力のフォーマットや粒度を一定に揃えたい場合に、最も効果的なプロンプト技法はどれか。
*When you want to keep the format and level of detail of outputs consistent, which prompting technique is most effective?*

A. 思考の連鎖(Chain-of-thought)のみを指示する
*A. Instructing only chain-of-thought reasoning*
B. 望ましい入出力例を2〜3個示す少数例示(Few-shot prompting)
*B. Few-shot prompting: showing 2-3 examples of desired input/output*
C. できるだけ短いプロンプトにする
*C. Keeping the prompt as short as possible*
D. システムプロンプトを使わない
*D. Not using a system prompt*

**正解: B**

**解説**: 出力の型・粒度を揃えたい場合は、具体的な入出力例を示すFew-shot promptingが特に有効である。

---

## 問8 [1: プロンプト設計とタスク実行]

複雑な多段階の計算を含む分析タスクの精度を上げたい場合に、最も適した工夫はどれか。
*When you want to improve the accuracy of an analytical task involving complex, multi-step calculations, which approach is most suitable?*

A. プロンプトを可能な限り短く抽象的にする
*A. Making the prompt as short and abstract as possible*
B. 「ステップごとに考えてから結論を出して」と指示し、推論過程を明示させる(Chain-of-thought)
*B. Instructing "think step by step before concluding" to make the reasoning process explicit (chain-of-thought)*
C. 出力フォーマットの指定を省く
*C. Omitting the output format specification*
D. 役割指定を省略する
*D. Omitting the role specification*

**正解: B**

**解説**: 複雑な推論・多段階の計算を要するタスクでは、Chain-of-thoughtで推論過程を明示的に出力させることで精度が向上しやすく、途中経過の検証もできる。

---

## 問9 [1: プロンプト設計とタスク実行]

長文の参考資料と複数の指示を含む複雑なプロンプトを作成する際に、Claudeが「どこが参考資料でどこが指示か」を混同しないようにするための工夫として最も適切なものはどれか。
*When creating a complex prompt that includes lengthy reference material and multiple instructions, which technique is most appropriate for preventing Claude from confusing which parts are reference material and which are instructions?*

A. すべて改行なしの一続きの文章にする
*A. Writing everything as one continuous block of text with no line breaks*
B. XMLタグ(例: `<document>`, `<instructions>`)で要素ごとに区切る
*B. Delimiting each element with XML tags (e.g., `<document>`, `<instructions>`)*
C. 資料と指示を別々のチャットセッションに分ける
*C. Splitting the material and instructions into separate chat sessions*
D. 資料の内容を要約せず全文貼り付けることだけを意識する
*D. Only being careful to paste the material in full without summarizing it*

**正解: B**

**解説**: XMLタグでプロンプト内の要素(参照資料、指示、例など)を明示的に区切ると、Claudeがそれぞれの役割を誤解しにくくなる。特に長文・複数資料を扱う場合に有効。

---

## 問10 [3: 製品とモデルの選択]

大量の問い合わせメールを毎日高速かつ低コストで一次分類したい。最も適したモデル階層はどれか。
*You want to perform fast, low-cost initial classification of a large volume of daily inquiry emails. Which model tier is most suitable?*

A. Haiku
B. Sonnet
C. Opus
D. モデル階層による違いはないので何でもよい
*D. It doesn't matter, since model tiers make no difference*

**正解: A**

**解説**: Haikuは速度とコスト効率を優先する定型的な分類・大量処理タスクに向く。高度な推論を必要としない反復タスクではまずHaikuのような軽量モデルを検討するのが実務的。

---

## 問11 [3: 製品とモデルの選択]

社内資料をまとめて参照させながら、同じ業務文脈で継続的にClaudeとやり取りしたい場合、Claude.aiで最も適した機能はどれか。
*When you want to continuously interact with Claude in the same work context while having it reference a collection of internal documents, which Claude.ai feature is most suitable?*

A. 単発のチャット履歴を都度削除しながら使う
*A. Using one-off chats and deleting the history each time*
B. Projects(プロジェクト)にナレッジとカスタム指示を設定する
*B. Setting up knowledge and custom instructions in a Project*
C. 毎回すべての背景情報をゼロから貼り付ける
*C. Pasting all background information from scratch every time*
D. Artifactsだけを使い、チャットは使わない
*D. Using only Artifacts and not chat*

**正解: B**

**解説**: Projectsを使うと、ナレッジ(参照資料)とカスタム指示(継続的なルール)をまとめて設定でき、同じ文脈を毎回説明し直す必要がなくなる。

---

## 問12 [5: 設定とナレッジ管理]

Projectsの「カスタム指示」と「ナレッジ」の役割の違いとして最も適切な説明はどれか。
*Which of the following best explains the difference in role between "custom instructions" and "knowledge" in Projects?*

A. カスタム指示はAPIキーの管理機能であり、ナレッジは出力フォーマットの指定機能である
*A. Custom instructions are an API key management feature, and knowledge is an output-format specification feature.*
B. カスタム指示はプロジェクト全体に適用される継続的なルール(役割・トーン・出力ルールなど)、ナレッジはClaudeが参照する資料である
*B. Custom instructions are ongoing rules applied across the whole project (role, tone, output rules, etc.), while knowledge is material that Claude references.*
C. カスタム指示とナレッジは同じ機能の別名であり違いはない
*C. Custom instructions and knowledge are just two names for the same feature; there is no difference.*
D. ナレッジはモデルの階層(Haiku/Sonnet/Opus)を切り替える機能である
*D. Knowledge is a feature for switching model tiers (Haiku/Sonnet/Opus).*

**正解: B**

**解説**: カスタム指示はシステムプロンプトに相当する継続的なルール設定、ナレッジはプロジェクト内でClaudeが参照できる資料のアップロード機能であり、それぞれ役割が異なる。

---

## 問13 [6: ガバナンス・リスク・責任あるAI利用]

Anthropicが用いる「Constitutional AI」という手法の説明として最も適切なものはどれか。
*Which of the following best describes the "Constitutional AI" approach used by Anthropic?*

A. Claudeの利用にあたって顧客が同意すべき利用規約の別名である
*A. Another name for the terms of service that customers must agree to when using Claude.*
B. モデル自身が定められた原則(憲法)に照らして自らの出力を評価・改善するように訓練するアプローチ
*B. An approach that trains the model itself to evaluate and improve its own outputs against a defined set of principles ("constitution").*
C. 各国の憲法・法律をClaudeが自動的に遵守しているかチェックする外部監査機能
*C. An external audit feature that checks whether Claude automatically complies with the constitutions and laws of various countries.*
D. Enterpriseプランにのみ搭載されている追加のセキュリティ機能
*D. An additional security feature available only in the Enterprise plan.*

**正解: B**

**解説**: Constitutional AIは、モデルが明文化された原則に基づいて自己の出力を評価・改善するように訓練する、Anthropicの安全性向上アプローチの一つである。

---

## 問14 [6: ガバナンス・リスク・責任あるAI利用](複数選択)

組織でClaudeを業務利用する際に踏まえるべき責任あるAI利用の原則として**適切なもの**をすべて選べ。
*Select ALL of the following that are appropriate principles of responsible AI use to keep in mind when using Claude for work within an organization.*

A. 重要な意思決定や対外的な発信は必ず人間が最終確認・承認する
*A. A human must always give final review and approval for important decisions and external communications.*
B. タスク遂行に不要な機密情報・個人情報まで積極的にプロンプトへ含める
*B. Actively include confidential or personal information in prompts even when it is not necessary for the task.*
C. AIの出力を業務に利用した結果の最終的な責任は利用した人間・組織にある
*C. Ultimate responsibility for the consequences of using AI output in business rests with the person/organization that used it.*
D. コンシューマー向けプランとビジネス向けプランでデータの学習利用ポリシーが異なりうることを踏まえ、契約内容を確認する
*D. Recognize that data-training-use policies may differ between consumer and business plans, and check the contract terms.*

**正解: A, C, D**

**解説**: 人間による最終確認、最終責任の所在の理解、プランごとのデータ利用ポリシーの確認はいずれも責任あるAI利用の基本原則である。一方、不要な機密情報まで積極的に含めることは「最小限の情報共有の原則」に反する。

---

## 問15 [7: トラブルシューティングとエスカレーション]

Claudeの出力が期待通りでないとき、最初に見直すべき原因として最も可能性が高いものはどれか。
*When Claude's output isn't what you expected, which of the following is the most likely cause to check first?*

A. Anthropicのサーバー障害
*A. An Anthropic server outage*
B. プロンプトの指示が曖昧、または必要な文脈・成功基準が不足している
*B. The prompt's instructions are ambiguous, or necessary context/success criteria are missing.*
C. 使用しているPCのスペック不足
*C. Insufficient specs on the PC being used*
D. インターネット回線の速度
*D. Internet connection speed*

**正解: B**

**解説**: 出力が期待とズレる場合、多くはプロンプト側(曖昧な指示、文脈不足、フォーマット未指定)に原因があることが多く、まずそこを疑って調整するのが実務的なアプローチである。
