window.MOCK_EXAM_DATA = {
  "examKey": "associate-foundations",
  "examTitle": "Claude Certified Associate – Foundations",
  "timeLimitMinutes": 120,
  "passScore": 720,
  "scoreMin": 100,
  "scoreMax": 1000,
  "officialQuestionCount": 60,
  "domainWeights": {
    "1": 14,
    "2": 21,
    "3": 12,
    "4": 16,
    "5": 12,
    "6": 15,
    "7": 10
  },
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
      "domainLabel": "7: トラブルシューティングと最適化",
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
    },
    {
      "id": 16,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "あなたはマーケティング担当です。新商品の発表文を、Claudeに下書きさせます。最初の出力は一般的で、狙った読者に響きません。最も適切な方法はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "出力をそのまま使い、読者の反応を見てから直す"
        },
        {
          "letter": "B",
          "ja": "対象の読者、商品の特徴、トーン、長さ、避けたい表現を具体的に伝えて、プロンプトを改良する"
        },
        {
          "letter": "C",
          "ja": "「もっと良くして」とだけ伝えて、何度も再生成させる"
        },
        {
          "letter": "D",
          "ja": "他のツールに切り替えて、同じ依頼をする"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "出力が一般的になるのは、文脈や基準が足りないため。対象、特徴、トーン、長さなどを具体的に伝えて改良するのが効果的。「もっと良く」だけでは、何を直すのかが伝わらない。"
    },
    {
      "id": 17,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "あなたはプロジェクトマネージャーです。過去3か月の議事録を読み込ませて、課題の整理、優先度づけ、次のアクションの提案までを一度に依頼したところ、出力が散漫になりました。最も適切な方法はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "議事録の量を減らすために、冒頭の1回分だけを使う"
        },
        {
          "letter": "B",
          "ja": "出力が散漫でも、人が最後にまとめ直す前提で使う"
        },
        {
          "letter": "C",
          "ja": "同じ依頼を、より長い文章で繰り返す"
        },
        {
          "letter": "D",
          "ja": "「課題の抽出 → 優先度づけ → アクション案」のように工程に分けて、前の工程の出力を次の依頼に使う"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "複雑な依頼は、工程に分けて構造化すると品質が安定し、問題の原因も特定しやすい。長くして繰り返したり、情報を減らしたりしても、構造の問題は解決しない。"
    },
    {
      "id": 18,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "あなたは営業担当です。顧客への提案メールで、決まった書式と言い回しに揃えて、数十通を作成したいです。文章での説明だけでは、出力の書式がばらつきます。最も適切な方法はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "書式のルールを、さらに長い文章で説明する"
        },
        {
          "letter": "B",
          "ja": "1通ずつ、毎回違う指示で依頼する"
        },
        {
          "letter": "C",
          "ja": "望ましい書式の例を2〜3個示してから、各顧客の情報を渡して依頼する"
        },
        {
          "letter": "D",
          "ja": "ばらつきは気にせず、そのまま送る"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "書式や粒度を揃えたいときは、望ましい入出力の例を示すのが最も効果的。文章の説明だけでは解釈がばらつく。"
    },
    {
      "id": 19,
      "domainLabel": "1: プロンプト設計とタスク実行",
      "domainLink": "../topics/01-prompting-task-execution/notes.html",
      "stemJa": "あなたは企画担当です。新規事業のアイデアを幅広く出したい場面と、出たアイデアの中から1つを選んで根拠をまとめたい場面があります。それぞれの進め方として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "最初から、最良の1案だけを出させる"
        },
        {
          "letter": "B",
          "ja": "どちらも、同じ書き方の依頼で行う"
        },
        {
          "letter": "C",
          "ja": "アイデア出しは量を先に出させ、評価と絞り込みは別の工程で基準を決めて行う"
        },
        {
          "letter": "D",
          "ja": "アイデア出しと評価を、1つの依頼で同時に行わせる"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "ブレインストーミングは量を先に出し、評価・絞り込みは別工程にする。タスクの種類(分析、調査、下書き、ブレインストーミング)に応じて戦略を変える。"
    },
    {
      "id": 20,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは法務担当です。Claudeに新しい規制の概要を作らせたところ、具体的な条文番号が引用されていました。この概要を社内に共有する前に、最も適切な行動はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "引用された条文を、公式の条文と照合して確認してから共有する"
        },
        {
          "letter": "B",
          "ja": "もっとフォーマルな文体に書き換えて、共有する"
        },
        {
          "letter": "C",
          "ja": "Claudeに「この内容は正しいか」と尋ね、「正しい」と答えたら共有する"
        },
        {
          "letter": "D",
          "ja": "Claudeが確信を持って答えているので、そのまま共有する"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "具体的に見える詳細(条文番号など)は、ハルシネーションで捏造されることがある。重要な事実は一次情報と照合する。自己申告の確信度や体裁の変更は、正しさの保証にならない。"
    },
    {
      "id": 21,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは経営企画の担当です。Claudeが作った市場分析のレポートに、ある数値が本文と表で食い違っています。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "どちらかの値を、適当に選んで採用する"
        },
        {
          "letter": "B",
          "ja": "食い違いを指摘し、元データや出典と照合して正しい値を確認してから、修正を依頼する"
        },
        {
          "letter": "C",
          "ja": "気づかなかったことにして、そのまま提出する"
        },
        {
          "letter": "D",
          "ja": "Claudeに「確信度を教えて」と尋ね、高い方を採用する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "不整合は、出典や元データと照合して確認する。Claudeの自己申告の確信度で選んではならない。"
    },
    {
      "id": 22,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは人事担当です。採用の応募者の要約をClaudeに作らせたところ、特定の属性の応募者に対して、否定的な表現が多い傾向が見られました。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "要約の文体だけを、柔らかく書き換える"
        },
        {
          "letter": "B",
          "ja": "その応募者の分だけ、Claudeの利用をやめる"
        },
        {
          "letter": "C",
          "ja": "傾向があっても、AIの出力なので客観的として採用する"
        },
        {
          "letter": "D",
          "ja": "バイアスの可能性を疑い、判断基準を明示した評価に変え、人が確認する工程を残して、結果の偏りを検証する"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "出力に偏りが疑われるときは、基準を明示し、人の確認を残して、偏りを検証する。AIの出力が客観的とは限らない。文体の修正は、判断の偏りを解決しない。"
    },
    {
      "id": 23,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは広報担当です。同じ内容のお知らせを、(a)社内の技術者向けと、(b)一般の顧客向けに用意します。最も適切な方法はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "読み手ごとに、トーン、専門用語の量、詳しさを指定して、別々の版を作らせ、比べて調整する"
        },
        {
          "letter": "B",
          "ja": "顧客向けだけ作り、技術者には口頭で補足する"
        },
        {
          "letter": "C",
          "ja": "1つの版を作り、両方にそのまま使う"
        },
        {
          "letter": "D",
          "ja": "専門用語を、技術者向けにも一切使わない"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "対象者に合わせて出力を調整するのが基本。読み手ごとにトーンや用語を指定し、複数の版を比べて磨く。"
    },
    {
      "id": 24,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは分析担当です。Claudeが作った分析結果を、毎月の定例会で使います。長期的に再利用する文書と、その場の確認のための短い説明があります。出力形式の選び方として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "どちらも、画像として保存する"
        },
        {
          "letter": "B",
          "ja": "どちらも、アーティファクトにする"
        },
        {
          "letter": "C",
          "ja": "再利用する文書はアーティファクト、短い説明はインラインの回答にする"
        },
        {
          "letter": "D",
          "ja": "どちらも、長い文章のインライン回答にする"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "長く再利用する成果物(文書、資料、コード)はアーティファクトが向き、短い回答や説明はインラインで足りる。後工程で機械処理するものは構造化データにする。"
    },
    {
      "id": 25,
      "domainLabel": "2: 出力の評価と検証",
      "domainLink": "../topics/02-output-evaluation-validation/notes.html",
      "stemJa": "あなたは財務担当です。Claudeに、決算資料の要約を作らせました。この要約を経営会議の判断材料に使います。検証の深さをどう決めるのが最も適切ですか?",
      "options": [
        {
          "letter": "A",
          "ja": "誤りの影響が大きいため、数値や重要な主張を元の資料と照合し、人がレビューしてから使う"
        },
        {
          "letter": "B",
          "ja": "すべての数値を確認するのは時間がかかるため、確認しない"
        },
        {
          "letter": "C",
          "ja": "文体を確認すれば、内容の検証は不要"
        },
        {
          "letter": "D",
          "ja": "AIの要約は十分に正確なので、検証は不要"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "レビューや検証の深さは、間違えたときの影響の大きさで決める。経営判断に使う数値は、元の資料と照合する。"
    },
    {
      "id": 26,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "あなたは、カスタマーサポートの担当です。毎日数千件の問い合わせを、緊急度で一次分類したいです。深い推論は必要なく、速度とコストが重要です。最も適切な選択はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "最も高性能なモデル(Opus)を、すべての分類に使う"
        },
        {
          "letter": "B",
          "ja": "高速で低コストのモデル(Haiku)を使う"
        },
        {
          "letter": "C",
          "ja": "モデルは選ばず、毎回ランダムに決める"
        },
        {
          "letter": "D",
          "ja": "分類はせず、すべて人が読む"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "単純で大量のタスクには、高速で低コストのモデルが向く。最高性能のモデルは、複雑な推論が必要なタスクのために取っておく。"
    },
    {
      "id": 27,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "あなたは戦略担当です。複数の事業の財務データと競合の動向を踏まえて、重要な投資判断の分析を行います。誤りの影響が大きく、深い推論が必要です。モデルの選び方として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "モデルは何でも同じなので、最初に表示されたものを使う"
        },
        {
          "letter": "B",
          "ja": "モデルの出力は検証せずに使う"
        },
        {
          "letter": "C",
          "ja": "コストを最優先して、最も軽量なモデルを使う"
        },
        {
          "letter": "D",
          "ja": "推論能力が最も高いモデル(Opus)を選び、結果は人が検証する"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "誤りの影響が大きく、深い推論が必要な作業には高性能なモデルが向く。ただし、人による検証は残す。"
    },
    {
      "id": 28,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "あなたは営業企画の担当です。1つの案件について、数週間にわたって、提案資料、顧客とのやりとり、議事録を、同じ文脈で継続して扱いたいです。最も適切な機能はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "毎回新しいチャットを開始し、背景をその都度貼り付ける"
        },
        {
          "letter": "B",
          "ja": "アーティファクトだけで、すべて管理する"
        },
        {
          "letter": "C",
          "ja": "1つのチャットだけで、数週間続ける"
        },
        {
          "letter": "D",
          "ja": "プロジェクトを作り、資料をナレッジに、ルールをカスタム指示に設定する"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "継続的に同じ業務文脈で使うなら、プロジェクトが適している。ナレッジに資料、カスタム指示にルールを置けば、毎回の背景説明が不要になる。"
    },
    {
      "id": 29,
      "domainLabel": "3: 製品とモデルの選択",
      "domainLink": "../topics/03-product-model-selection/notes.html",
      "stemJa": "あなたは企画担当です。長い会話を続けるうちに、Claudeが序盤の決定事項を参照しなくなり、話題も複数に混ざってきました。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "要約せずに、新しい会話をゼロから始める"
        },
        {
          "letter": "B",
          "ja": "決定事項、前提、残課題を要約して、新しい会話に引き継いで始める"
        },
        {
          "letter": "C",
          "ja": "同じ会話を、そのまま続ける"
        },
        {
          "letter": "D",
          "ja": "序盤の内容を、全部もう一度貼り付ける"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "会話が長くなって混線したときは、要点を要約して新しい会話に引き継ぐのが有効。長い会話を続けると、さらに混乱しやすい。"
    },
    {
      "id": 30,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "あなたは業務改善の担当です。月次レポートの作成に、毎回3日かかっています。Claudeで改善したいのですが、どこから始めるのが最も適切ですか?",
      "options": [
        {
          "letter": "A",
          "ja": "現状の作業工程を書き出し、時間がかかる・繰り返しが多い・判断が単純な工程から、小さく試す"
        },
        {
          "letter": "B",
          "ja": "全工程を一度にClaudeに任せる"
        },
        {
          "letter": "C",
          "ja": "他社の事例をそのまま真似する"
        },
        {
          "letter": "D",
          "ja": "改善は難しいと判断して、現状を維持する"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "現状の工程を洗い出し、効果が見込める工程から小さく始めて評価し、改良するのが安全で効果的。"
    },
    {
      "id": 31,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "あなたはチームのリーダーです。経営層に、Claudeの導入効果を説明します。説明の仕方として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "限界ばかりを説明して、効果には触れない"
        },
        {
          "letter": "B",
          "ja": "効果だけを強調して、限界には触れない"
        },
        {
          "letter": "C",
          "ja": "時間削減などの効果を具体的な数字で示しつつ、ハルシネーションやデータの機密性といった限界も率直に伝える"
        },
        {
          "letter": "D",
          "ja": "技術の詳細を、専門用語でできるだけ詳しく説明する"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "価値と限界の両方を、具体的に伝えて期待値を合わせるのが適切。効果だけの強調は、後の失望を招く。"
    },
    {
      "id": 32,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "あなたは経理担当です。請求書の確認業務に、Claudeを組み込みます。支払いに直結する確認もあります。ワークフローの設計として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "Claudeの判断だけで、支払いまで自動で行う"
        },
        {
          "letter": "B",
          "ja": "人の確認工程をすべて廃止して、効率を最大にする"
        },
        {
          "letter": "C",
          "ja": "Claudeは使わずに、従来どおり全件を手作業で確認する"
        },
        {
          "letter": "D",
          "ja": "Claudeが一次確認を行い、支払いの承認など重要な判断は、人が確認する工程を残す"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "既存のワークフローにClaudeを統合するときは、重要な判断に人の確認を残す。自動化を一気に進めるのは、リスクが大きい。"
    },
    {
      "id": 33,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "あなたは新規事業の担当です。顧客向けのサービスを企画する前に、要件が漏れていないかを確認したいです。Claudeの使い方として最も適切なのはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "企画の概要を伝えて、Claudeに質問をさせ、抜けている要件や前提を洗い出す"
        },
        {
          "letter": "B",
          "ja": "要件の確認は、すべて人がやり、Claudeは使わない"
        },
        {
          "letter": "C",
          "ja": "企画を伝えず、一般的な要件のリストだけを出させる"
        },
        {
          "letter": "D",
          "ja": "最初に、詳細な実装を作らせる"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "要件やユースケースの分析にClaudeを使うなら、質問をさせて、抜けている要件や前提を引き出すのが有効。"
    },
    {
      "id": 34,
      "domainLabel": "4: ワークフロー統合とソリューション設計",
      "domainLink": "../topics/04-workflow-integration-solution-design/notes.html",
      "stemJa": "あなたは社内のDX担当です。ある部署から、ClaudeのAPIを使った社内システムとの連携の依頼を受けましたが、自分にはAPIの開発経験がありません。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "要件を整理して、技術的に複雑な実装は、デベロッパーやアーキテクトにエスカレーションする"
        },
        {
          "letter": "B",
          "ja": "経験がなくても、独力で実装を始める"
        },
        {
          "letter": "C",
          "ja": "別のツールでの代替を、確認せずに提案する"
        },
        {
          "letter": "D",
          "ja": "依頼を断り、理由も伝えない"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "Associateの範囲は、プラットフォームの機能を使った生産性向上。技術的に複雑な実装は、デベロッパーやアーキテクトにエスカレーションするのが適切。"
    },
    {
      "id": 35,
      "domainLabel": "5: 設定とナレッジ管理",
      "domainLink": "../topics/05-configuration-knowledge-management/notes.html",
      "stemJa": "あなたはチームのプロジェクト管理者です。プロジェクトのナレッジに、半年前の旧版の業務マニュアルと、新版の両方が入っていて、Claudeの回答が食い違うことがあります。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "旧版のファイル名を変えるだけで、残す"
        },
        {
          "letter": "B",
          "ja": "旧版を削除して、新版に差し替え、更新の運用ルールも決める"
        },
        {
          "letter": "C",
          "ja": "両方を残し、回答のたびに、どちらが正しいかをユーザーに尋ねる"
        },
        {
          "letter": "D",
          "ja": "ナレッジを一切使わない運用に変える"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "古い資料と新しい資料が混在すると、回答が食い違う。古い版は差し替え、更新の運用ルールを決めて維持する。"
    },
    {
      "id": 36,
      "domainLabel": "5: 設定とナレッジ管理",
      "domainLink": "../topics/05-configuration-knowledge-management/notes.html",
      "stemJa": "あなたはチームの管理者です。Claudeに、Google DriveとGmailのコネクタを接続して、業務に使わせたいです。接続する際の最も適切な考え方はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "権限の確認は、問題が起きてから行う"
        },
        {
          "letter": "B",
          "ja": "個人のアカウントを、チームで共有して使う"
        },
        {
          "letter": "C",
          "ja": "便利なので、できるだけ広い範囲を許可する"
        },
        {
          "letter": "D",
          "ja": "必要な範囲に絞って接続し、許可する権限と共有範囲を確認して、組織のポリシーに従う"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "コネクタは、Claudeが参照できる範囲を広げる。必要な範囲に絞り、権限と共有範囲を確認して、組織のポリシーに従う。"
    },
    {
      "id": 37,
      "domainLabel": "5: 設定とナレッジ管理",
      "domainLink": "../topics/05-configuration-knowledge-management/notes.html",
      "stemJa": "あなたはチームのプロジェクト管理者です。プロジェクトのカスタム指示に、「簡潔に」と「できるだけ詳しく」の両方が書かれていて、回答のスタイルが安定しません。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "矛盾したまま、様子を見る"
        },
        {
          "letter": "B",
          "ja": "矛盾を解消し、対象と場面ごとの方針(例: 要約は簡潔に、分析は詳しく)を、具体的に明記する"
        },
        {
          "letter": "C",
          "ja": "カスタム指示をすべて削除する"
        },
        {
          "letter": "D",
          "ja": "さらに多くのルールを、追加で書き足す"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "システムレベルの指示は、具体的で矛盾がないように書く。矛盾があると、出力のスタイルが安定しない。"
    },
    {
      "id": 38,
      "domainLabel": "5: 設定とナレッジ管理",
      "domainLink": "../topics/05-configuration-knowledge-management/notes.html",
      "stemJa": "あなたはプロジェクトの管理者です。プロジェクトの共有メンバーが10人います。カスタム指示を大幅に書き換えたいと考えています。最も適切な進め方はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "変更は全員に影響するため、事前に周知し、変更後の出力を確認して、必要なら調整する"
        },
        {
          "letter": "B",
          "ja": "メンバーごとに、別々のプロジェクトを作る"
        },
        {
          "letter": "C",
          "ja": "すぐに書き換えて、周知はしない"
        },
        {
          "letter": "D",
          "ja": "変更はせず、不満が出るまで現状を維持する"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "共有プロジェクトの指示やナレッジの変更は、全員に影響する。周知して、変更後の出力を確認する。"
    },
    {
      "id": 39,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "あなたはプロジェクトマネージャーです。顧客名と口座番号を含む表をClaudeにアップロードして、傾向を分析したいです。組織のポリシーは、規制対象の個人データの共有を制限しています。最も適切な行動はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "個人を識別する情報を削除または匿名化してから、アップロードする"
        },
        {
          "letter": "B",
          "ja": "アップロードしてから、Claudeに「保持しないで」と頼む"
        },
        {
          "letter": "C",
          "ja": "社内の分析なので、そのままアップロードする"
        },
        {
          "letter": "D",
          "ja": "分析を、完全にあきらめる"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "規制対象の個人情報は、使用前に削除または匿名化すれば、保護対象のデータをさらさずに分析できる。Claudeに保持しないよう頼むだけでは、ポリシーの要件を満たさない。"
    },
    {
      "id": 40,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "あなたはカスタマーサポートの責任者です。Claudeに、顧客からの医療に関する相談に対する、最終的な医学的助言を自動で返信させることを提案されました。最も適切な判断はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "出力の検証なしで、そのまま顧客に返信する"
        },
        {
          "letter": "B",
          "ja": "回答が速くなるので、全面的に自動化する"
        },
        {
          "letter": "C",
          "ja": "免責の文言さえ付ければ、問題ない"
        },
        {
          "letter": "D",
          "ja": "医学的助言をAIだけで出すのは不適切。一般的な情報の提供に留め、専門家につなぐ仕組みにする"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "誤りの影響が大きい医療などの助言を、AIだけで最終判断として出すのは不適切。専門家につなぐ仕組みを設ける。"
    },
    {
      "id": 41,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "あなたは部門のリーダーです。社内で、AIの利用ポリシーが定められています。メンバーの一人が、「業務が忙しいので、ポリシーで許可されていないツールを個人判断で使いたい」と相談してきました。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "組織のポリシーに従い、例外が必要なら、承認の手続きを踏む"
        },
        {
          "letter": "B",
          "ja": "忙しいなら、個人の判断で使ってよいと伝える"
        },
        {
          "letter": "C",
          "ja": "ポリシーを無視して、チームの標準にする"
        },
        {
          "letter": "D",
          "ja": "ポリシーは形式的なものなので、黙認する"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "組織のAIポリシーとガバナンスの基準に従う。例外が必要なら、承認の手続きを経る。"
    },
    {
      "id": 42,
      "domainLabel": "6: ガバナンス・リスク・責任あるAI利用",
      "domainLink": "../topics/06-governance-risk-responsible-use/notes.html",
      "stemJa": "あなたは人事担当です。Claudeで作った文書を、顧客向けの資料として使います。AIを使って作ったことの扱いと、責任の所在について、最も適切な考え方はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "組織の方針に従って、AI利用を適切に開示し、内容の最終的な責任は、公開する人が負う"
        },
        {
          "letter": "B",
          "ja": "内容の確認は、省略してよい"
        },
        {
          "letter": "C",
          "ja": "AIが作ったので、誤りがあってもAIの責任である"
        },
        {
          "letter": "D",
          "ja": "AI利用は、常に隠したほうがよい"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "AI利用の透明性と、人の責任の所在は、倫理的な観点で重要。AIの出力でも、公開・提出する人が責任を負う。"
    },
    {
      "id": 43,
      "domainLabel": "7: トラブルシューティングと最適化",
      "domainLink": "../topics/07-troubleshooting-escalation/notes.html",
      "stemJa": "あなたはマーケティング担当です。いつも使っているプロンプトで、急に出力の質が落ち、ばらつくようになりました。最も適切な切り分けはどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "原因は分からないので、同じプロンプトを繰り返し実行する"
        },
        {
          "letter": "B",
          "ja": "すぐに別のツールに乗り換える"
        },
        {
          "letter": "C",
          "ja": "出力の質が落ちたのは、Claudeの故障だと決めつける"
        },
        {
          "letter": "D",
          "ja": "指示の曖昧さ、文脈や資料の不足、会話の長さによる混線などの原因を順に疑い、プロンプトや設定を具体的に直す"
        }
      ],
      "correct": [
        "D"
      ],
      "explanation": "期待どおりでない出力は、原因を切り分けて直す。指示、文脈、資料、会話の長さなど、よくある原因から順に疑う。"
    },
    {
      "id": 44,
      "domainLabel": "7: トラブルシューティングと最適化",
      "domainLink": "../topics/07-troubleshooting-escalation/notes.html",
      "stemJa": "あなたは営業事務の担当です。毎週同じ形式の報告書を作るのに、毎回長いプロンプトを書き直していて、手間がかかります。最も適切な最適化はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "プロンプトをテンプレート化し、共通の背景やルールはプロジェクトにまとめる"
        },
        {
          "letter": "B",
          "ja": "毎回、一から新しく書き直す"
        },
        {
          "letter": "C",
          "ja": "報告書の作成を、やめる"
        },
        {
          "letter": "D",
          "ja": "前回の出力を、そのまま使い回す"
        }
      ],
      "correct": [
        "A"
      ],
      "explanation": "繰り返す作業は、プロンプトのテンプレート化や、プロジェクトへの背景の集約で効率化できる。"
    },
    {
      "id": 45,
      "domainLabel": "7: トラブルシューティングと最適化",
      "domainLink": "../topics/07-troubleshooting-escalation/notes.html",
      "stemJa": "あなたは経理の担当です。Claudeで税務の複雑な判断を伴う処理を試しましたが、何度修正しても、結果が安定しません。最も適切な対応はどれですか?",
      "options": [
        {
          "letter": "A",
          "ja": "出力が安定するまで、修正を無限に繰り返す"
        },
        {
          "letter": "B",
          "ja": "Claudeに、自分で判断させる"
        },
        {
          "letter": "C",
          "ja": "無理に続けず、税務の専門家や、アーキテクト・デベロッパーなど、適切な担当者に相談する"
        },
        {
          "letter": "D",
          "ja": "最も出力が良かったものを、検証せずに使う"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "試しても改善せず、判断の影響が大きいときは、エスカレーションの適切な場面。専門家や担当者に相談する。"
    }
  ]
};
