window.MOCK_EXAM_DATA = {
  "examKey": "associate-foundations",
  "examTitle": "Claude Certified Associate – Foundations",
  "timeLimitMinutes": 120,
  "passScore": 720,
  "scoreMin": 100,
  "scoreMax": 1000,
  "questions": [
    {
      "id": 1,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "Claudeに社内規程に関する質問をしたところ、実在しない条項番号を挙げて自信満々に回答した。この現象を防ぐための対策として**最も適切でないもの**はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "該当する社内規程の原文をプロンプトに含め、その範囲内で回答するよう指示する"
        },
        {
          "letter": "B",
          "ja": "「わからない場合は分からないと明記してよい」と指示に加える"
        },
        {
          "letter": "C",
          "ja": "回答の根拠となる条文箇所を引用させるよう指示する"
        },
        {
          "letter": "D",
          "ja": "より断定的な口調で回答するようプロンプトの語調を強める"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "断定的な口調を強めることはハルシネーション対策にならず、むしろ根拠のない断定を助長しかねない。根拠資料の提供、「わからない」を許容する指示、出典引用の要求はいずれも有効なハルシネーション対策である。"
    },
    {
      "id": 2,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "Claudeの出力品質を評価する際の観点として**適切でないもの**を1つ選べ。",
      "options": [
        {
          "letter": "A",
          "ja": "正確性(事実として正しいか)"
        },
        {
          "letter": "B",
          "ja": "完全性(求められた要素が漏れなく含まれているか)"
        },
        {
          "letter": "C",
          "ja": "生成に要したトークン数の多さ"
        },
        {
          "letter": "D",
          "ja": "関連性(依頼内容に的確に答えているか)"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "トークン数の多さ自体は品質の指標ではない。出力品質は正確性・関連性・完全性・一貫性・有用性といった観点で評価する。"
    },
    {
      "id": 3,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "Claudeの出力を業務で採用する前に、人間による入念なファクトチェックを特に優先すべきケースを**すべて**選べ。",
      "options": [
        {
          "letter": "A",
          "ja": "社外に公開する数値を含むプレスリリースの下書き"
        },
        {
          "letter": "B",
          "ja": "個人的な読書メモのブレインストーミング"
        },
        {
          "letter": "C",
          "ja": "法的拘束力を持つ契約書の条項案"
        },
        {
          "letter": "D",
          "ja": "社内向けアイデア出しの箇条書き"
        }
      ],
      "correct": [
        "A",
        "C"
      ],
      "explanation": "対外公開・法的拘束力があるなど、誤りの影響が大きい成果物は必ず人間の検証を挟むべきである。個人的なメモや社内のアイデア出しは相対的にリスクが低い。"
    },
    {
      "id": 4,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "毎日大量に届く問い合わせメールを、緊急度別に一次仕分けし、対応方針の最終決定は担当者が行う、というワークフローを設計している。この設計の考え方として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "Claudeに最終的な返信送付まで完全に自動で任せるべきである"
        },
        {
          "letter": "B",
          "ja": "Claudeには一次分類・下書き作成のみを任せ、最終判断は人間が担う役割分担が適切である"
        },
        {
          "letter": "C",
          "ja": "問い合わせ対応にAIを使うこと自体避けるべきである"
        },
        {
          "letter": "D",
          "ja": "全件を必ずOpusクラスの最上位モデルで処理すべきである"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "Claudeを「一次案・下書きの生成」に使い、人間が最終判断・承認を行うhuman-in-the-loop設計が典型的な安全なワークフロー設計である。"
    },
    {
      "id": 5,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "複雑な業務プロセスにClaudeを組み込む際の設計として、最も信頼性を高める考え方はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "一つの巨大なプロンプトに全工程の指示をまとめて一括処理させる"
        },
        {
          "letter": "B",
          "ja": "工程ごとにタスクを分解し、各工程の出力を検証してから次工程に進める"
        },
        {
          "letter": "C",
          "ja": "検証は最終成果物に対してのみ行えば十分である"
        },
        {
          "letter": "D",
          "ja": "工程分解すると処理が遅くなるため避けるべきである"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "複雑なタスクは工程ごとに分解し、各ステップの出力を確認しながら進める方が誤りの発見・修正がしやすく、全体の信頼性が高まる。"
    },
    {
      "id": 6,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "Claudeの導入に**向いていない**業務の特徴として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "定型的なメール文面の下書き作成"
        },
        {
          "letter": "B",
          "ja": "繰り返し発生する文書の要約作業"
        },
        {
          "letter": "C",
          "ja": "誤りの許容度が極めて低い、単独での最終的な安全性判断"
        },
        {
          "letter": "D",
          "ja": "過去の類似文書を参考にした一次案の生成"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "誤りの影響が大きく許容度が低い最終判断をClaude単独に委ねるのは不適切。Claudeはあくまで人間の意思決定を支援する位置づけが基本。"
    },
    {
      "id": 7,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "出力のフォーマットや粒度を一定に揃えたい場合に、最も効果的なプロンプト技法はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "思考の連鎖(Chain-of-thought)のみを指示する"
        },
        {
          "letter": "B",
          "ja": "望ましい入出力例を2〜3個示す少数例示(Few-shot prompting)"
        },
        {
          "letter": "C",
          "ja": "できるだけ短いプロンプトにする"
        },
        {
          "letter": "D",
          "ja": "システムプロンプトを使わない"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "出力の型・粒度を揃えたい場合は、具体的な入出力例を示すFew-shot promptingが特に有効である。"
    },
    {
      "id": 8,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "複雑な多段階の計算を含む分析タスクの精度を上げたい場合に、最も適した工夫はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "プロンプトを可能な限り短く抽象的にする"
        },
        {
          "letter": "B",
          "ja": "「ステップごとに考えてから結論を出して」と指示し、推論過程を明示させる(Chain-of-thought)"
        },
        {
          "letter": "C",
          "ja": "出力フォーマットの指定を省く"
        },
        {
          "letter": "D",
          "ja": "役割指定を省略する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "複雑な推論・多段階の計算を要するタスクでは、Chain-of-thoughtで推論過程を明示的に出力させることで精度が向上しやすく、途中経過の検証もできる。"
    },
    {
      "id": 9,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "長文の参考資料と複数の指示を含む複雑なプロンプトを作成する際に、Claudeが「どこが参考資料でどこが指示か」を混同しないようにするための工夫として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "すべて改行なしの一続きの文章にする"
        },
        {
          "letter": "B",
          "ja": "XMLタグ(例: `<document>`, `<instructions>`)で要素ごとに区切る"
        },
        {
          "letter": "C",
          "ja": "資料と指示を別々のチャットセッションに分ける"
        },
        {
          "letter": "D",
          "ja": "資料の内容を要約せず全文貼り付けることだけを意識する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "XMLタグでプロンプト内の要素(参照資料、指示、例など)を明示的に区切ると、Claudeがそれぞれの役割を誤解しにくくなる。特に長文・複数資料を扱う場合に有効。"
    },
    {
      "id": 10,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "大量の問い合わせメールを毎日高速かつ低コストで一次分類したい。最も適したモデル階層はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "Haiku"
        },
        {
          "letter": "B",
          "ja": "Sonnet"
        },
        {
          "letter": "C",
          "ja": "Opus"
        },
        {
          "letter": "D",
          "ja": "モデル階層による違いはないので何でもよい"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "Haikuは速度とコスト効率を優先する定型的な分類・大量処理タスクに向く。高度な推論を必要としない反復タスクではまずHaikuのような軽量モデルを検討するのが実務的。"
    },
    {
      "id": 11,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "社内資料をまとめて参照させながら、同じ業務文脈で継続的にClaudeとやり取りしたい場合、Claude.aiで最も適した機能はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "単発のチャット履歴を都度削除しながら使う"
        },
        {
          "letter": "B",
          "ja": "Projects(プロジェクト)にナレッジとカスタム指示を設定する"
        },
        {
          "letter": "C",
          "ja": "毎回すべての背景情報をゼロから貼り付ける"
        },
        {
          "letter": "D",
          "ja": "Artifactsだけを使い、チャットは使わない"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "Projectsを使うと、ナレッジ(参照資料)とカスタム指示(継続的なルール)をまとめて設定でき、同じ文脈を毎回説明し直す必要がなくなる。"
    },
    {
      "id": 12,
      "domainLabel": "5: 設定とナレッジ管理",
      "domainLink": "../topics/05-configuration-knowledge-management/notes.html",
      "stemJa": "Projectsの「カスタム指示」と「ナレッジ」の役割の違いとして最も適切な説明はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "カスタム指示はAPIキーの管理機能であり、ナレッジは出力フォーマットの指定機能である"
        },
        {
          "letter": "B",
          "ja": "カスタム指示はプロジェクト全体に適用される継続的なルール(役割・トーン・出力ルールなど)、ナレッジはClaudeが参照する資料である"
        },
        {
          "letter": "C",
          "ja": "カスタム指示とナレッジは同じ機能の別名であり違いはない"
        },
        {
          "letter": "D",
          "ja": "ナレッジはモデルの階層(Haiku/Sonnet/Opus)を切り替える機能である"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "カスタム指示はシステムプロンプトに相当する継続的なルール設定、ナレッジはプロジェクト内でClaudeが参照できる資料のアップロード機能であり、それぞれ役割が異なる。"
    },
    {
      "id": 13,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "Anthropicが用いる「Constitutional AI」という手法の説明として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "Claudeの利用にあたって顧客が同意すべき利用規約の別名である"
        },
        {
          "letter": "B",
          "ja": "モデル自身が定められた原則(憲法)に照らして自らの出力を評価・改善するように訓練するアプローチ"
        },
        {
          "letter": "C",
          "ja": "各国の憲法・法律をClaudeが自動的に遵守しているかチェックする外部監査機能"
        },
        {
          "letter": "D",
          "ja": "Enterpriseプランにのみ搭載されている追加のセキュリティ機能"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "Constitutional AIは、モデルが明文化された原則に基づいて自己の出力を評価・改善するように訓練する、Anthropicの安全性向上アプローチの一つである。"
    },
    {
      "id": 14,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "組織でClaudeを業務利用する際に踏まえるべき責任あるAI利用の原則として**適切なもの**をすべて選べ。",
      "options": [
        {
          "letter": "A",
          "ja": "重要な意思決定や対外的な発信は必ず人間が最終確認・承認する"
        },
        {
          "letter": "B",
          "ja": "タスク遂行に不要な機密情報・個人情報まで積極的にプロンプトへ含める"
        },
        {
          "letter": "C",
          "ja": "AIの出力を業務に利用した結果の最終的な責任は利用した人間・組織にある"
        },
        {
          "letter": "D",
          "ja": "コンシューマー向けプランとビジネス向けプランでデータの学習利用ポリシーが異なりうることを踏まえ、契約内容を確認する"
        }
      ],
      "correct": [
        "A",
        "C",
        "D"
      ],
      "explanation": "人間による最終確認、最終責任の所在の理解、プランごとのデータ利用ポリシーの確認はいずれも責任あるAI利用の基本原則である。一方、不要な機密情報まで積極的に含めることは「最小限の情報共有の原則」に反する。"
    },
    {
      "id": 15,
      "domainLabel": "7: トラブルシューティングとエスカレーション",
      "domainLink": "../topics/07-troubleshooting-escalation/notes.html",
      "stemJa": "Claudeの出力が期待通りでないとき、最初に見直すべき原因として最も可能性が高いものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "Anthropicのサーバー障害"
        },
        {
          "letter": "B",
          "ja": "プロンプトの指示が曖昧、または必要な文脈・成功基準が不足している"
        },
        {
          "letter": "C",
          "ja": "使用しているPCのスペック不足"
        },
        {
          "letter": "D",
          "ja": "インターネット回線の速度"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "出力が期待とズレる場合、多くはプロンプト側(曖昧な指示、文脈不足、フォーマット未指定)に原因があることが多く、まずそこを疑って調整するのが実務的なアプローチである。"
    }
  ]
};
