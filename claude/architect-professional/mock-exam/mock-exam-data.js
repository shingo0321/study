window.MOCK_EXAM_DATA = {
  "examKey": "architect-professional",
  "examTitle": "Claude Certified Architect – Professional",
  "timeLimitMinutes": 120,
  "passScore": 720,
  "scoreMin": 100,
  "scoreMax": 1000,
  "officialQuestionCount": 63,
  "domainWeights": {
    "01": 17,
    "02": 13,
    "03": 19,
    "04": 16,
    "05": 14,
    "06": 14,
    "07": 7
  },
  "questions": [
    {
      "id": 1,
      "domainLabel": "03: Integration",
      "domainLink": "../topics/03-integration/notes.html",
      "stemJa": "社内の複数チームが、それぞれ独自にAnthropic直接APIキーを発行し、独自のリトライ・ロギング実装でClaudeを呼び出すようになっている。数ヶ月後、コスト超過とセキュリティ監査での指摘(APIキーがリポジトリに直書きされている事例あり)が問題化した。アーキテクトとして最も適切な次の一手はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "全チームに対し、直接APIキーの利用を即時禁止し、Bedrock経由に強制移行させる"
        },
        {
          "letter": "B",
          "ja": "認証・ロギング・コスト計測・シークレット管理を共通化した社内ゲートウェイ/プラットフォーム層を用意し、各チームはそこ経由でアクセスする体制に移行する"
        },
        {
          "letter": "C",
          "ja": "各チームにAPIキー管理のベストプラクティス資料を配布し、自己申告でのコンプライアンス確認に任せる"
        },
        {
          "letter": "D",
          "ja": "コスト超過が大きいチームからAPIアクセスを剥奪する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "個別チームでの再実装によるガバナンス欠如が根本原因であり、07章・03章で扱う「内部プラットフォーム化」による認証・ロギング・シークレット管理の共通化が本質的な解決策。Aは移行先を限定しすぎ根本原因(統制の欠如)に対処していない。"
    },
    {
      "id": 2,
      "domainLabel": "03: Integration",
      "domainLink": "../topics/03-integration/notes.html",
      "stemJa": "金融機関が、リアルタイム性は不要だが夜間に数十万件のドキュメントを分類するバッチジョブをClaudeで構築している。レイテンシ要件は緩いが、コストを最小化したい。最も適した統合パターンはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "ストリーミングAPIで1件ずつリアルタイムに処理する"
        },
        {
          "letter": "B",
          "ja": "バッチ処理向けのAPI/割引を活用し、非同期でまとめて処理する"
        },
        {
          "letter": "C",
          "ja": "マルチエージェントのオーケストレーター・ワーカーパターンで並列化する"
        },
        {
          "letter": "D",
          "ja": "各ドキュメントごとに個別のMCPサーバーを起動する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "リアルタイム性が不要な大量処理には、バッチ処理用エンドポイントや割引を活用するのがコスト最適。ストリーミングは体感レイテンシ改善が目的でありこのユースケースには不要なオーバーヘッドとなる。"
    },
    {
      "id": 3,
      "domainLabel": "03: Integration",
      "domainLink": "../topics/03-integration/notes.html",
      "stemJa": "あるエンタープライズが、Anthropic直接APIとAWS Bedrock経由のClaudeを併用するアーキテクチャを検討している。この設計の主な動機として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "Bedrock経由の方が常に安価だから"
        },
        {
          "letter": "B",
          "ja": "マルチプロバイダ冗長化によって単一障害点を避け、既存のAWS IAM/ガバナンス体制とも統合できるため"
        },
        {
          "letter": "C",
          "ja": "Bedrock経由でしか利用できないモデル機能があるため"
        },
        {
          "letter": "D",
          "ja": "直接APIはレート制限がないため、Bedrockのバックアップとしてのみ使う"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "マルチプロバイダ構成の主目的は可用性の冗長化と、既存クラウドのIAM・コンプライアンス体制との統合しやすさ。価格やレート制限の一律優劣を前提にするのは誤り。"
    },
    {
      "id": 4,
      "domainLabel": "01: Solution Design & Architecture",
      "domainLink": "../topics/01-solution-design-architecture/notes.html",
      "stemJa": "社内問い合わせ対応エージェントを設計中。要件は「返金判断など金銭的影響のある処理は必ず人間が最終承認する」「対応履歴は監査可能でなければならない」というもの。最も適したアーキテクチャパターンはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "完全自律のエージェント型ループで、全ての判断をエージェントに委ねる"
        },
        {
          "letter": "B",
          "ja": "決定論的な制御フローを持つワークフロー型とし、金銭的影響のあるステップでのみ人間承認ステップを挟む設計"
        },
        {
          "letter": "C",
          "ja": "LLM-as-judgeで自動承認する"
        },
        {
          "letter": "D",
          "ja": "ルールベースシステムのみで構築し、LLMを一切使わない"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "監査性・制御性が重視される要件では、エージェント型の完全自律ループより、決定論的な制御フローの中に必要なステップでのみ人間承認を組み込むワークフロー型の方が適する。"
    },
    {
      "id": 5,
      "domainLabel": "01: Solution Design & Architecture",
      "domainLink": "../topics/01-solution-design-architecture/notes.html",
      "stemJa": "あるチームが単一エージェントに20種類以上のツールを持たせて複雑なタスクを処理させたところ、ツール選択の精度が下がり、レイテンシも悪化した。次に検討すべき設計変更として最も妥当なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "さらにツールを追加してカバレッジを上げる"
        },
        {
          "letter": "B",
          "ja": "タスクの性質ごとにサブエージェントへ機能を分割し、オーケストレーターが委譲するマルチエージェント構成を検討する"
        },
        {
          "letter": "C",
          "ja": "全てのツールを常にプロンプトに含めるのをやめ、温度パラメータを上げる"
        },
        {
          "letter": "D",
          "ja": "モデルを最上位ティアに固定すれば自然に解決する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "単一エージェントへのツール過集中はコンテキスト汚染・選択精度低下を招きやすい典型例。疎結合なサブエージェントへの分割は01章のマルチエージェント設計の代表的な対処パターン。ただし過剰な分割もアンチパターンである点も踏まえ、必要な範囲での分割が前提。"
    },
    {
      "id": 6,
      "domainLabel": "02: Claude Models, Prompting & Context Engineering",
      "domainLink": "../topics/02-models-prompting-context-engineering/notes.html",
      "stemJa": "高頻度・低難度な問い合わせ分類タスクと、低頻度・高難度な契約書レビュータスクを同じシステムで扱う必要がある。コストを抑えつつ品質を維持する設計として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "全リクエストに最上位モデルを一律適用する"
        },
        {
          "letter": "B",
          "ja": "全リクエストに軽量モデルを一律適用し、コストを最優先する"
        },
        {
          "letter": "C",
          "ja": "入力の難易度を判定し、定型的な分類は軽量モデルへ、複雑な契約書レビューは上位モデルへ振り分けるルーティング設計を行う"
        },
        {
          "letter": "D",
          "ja": "ランダムにモデルを選択して負荷分散する"
        }
      ],
      "correct": [
        "C"
      ],
      "explanation": "モデルルーティング(カスケード含む)は、タスク難易度に応じてモデルティアを使い分けることでコストと品質のバランスを取る本番規模の標準パターン。"
    },
    {
      "id": 7,
      "domainLabel": "02: Claude Models, Prompting & Context Engineering",
      "domainLink": "../topics/02-models-prompting-context-engineering/notes.html",
      "stemJa": "社内ナレッジベース(長大な固定ドキュメント)を毎回プロンプトに含めてユーザーの質問に答えるRAG的システムで、コストが想定より高い。1日あたりのアクセス頻度は高く、ドキュメントの更新頻度は低い。最も有効な最適化策はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "ドキュメントを要約して常に短縮版のみを使う(内容の劣化は許容する)"
        },
        {
          "letter": "B",
          "ja": "プロンプトキャッシュを活用し、静的な大きいドキュメント部分をキャッシュ対象として固定順序でプロンプト先頭に配置する"
        },
        {
          "letter": "C",
          "ja": "ユーザーの質問文を毎回要約してトークン数を削れば十分"
        },
        {
          "letter": "D",
          "ja": "出力トークンの最大値を減らす"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "「静的な大きい前置き+高頻度アクセス」はプロンプトキャッシュの経済効果が最も出やすいパターン。キャッシュは前方一致で効くため、変化しない部分を先頭固定で配置する設計が前提となる。"
    },
    {
      "id": 8,
      "domainLabel": "04: Evaluation, Testing & Optimization",
      "domainLink": "../topics/04-evaluation-testing-optimization/notes.html",
      "stemJa": "新しいプロンプトを本番投入する前に品質を検証したい。要約タスクであり、「唯一の正解」がなく、正確性・網羅性・トーンの3軸で評価したい。最も適した評価方式はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "出力の完全一致(exact match)による自動採点のみ"
        },
        {
          "letter": "B",
          "ja": "複数軸のルーブリックを設計し、LLM-as-judgeまたは人手評価で採点する。人手評価はLLM-as-judgeの妥当性検証にも使う"
        },
        {
          "letter": "C",
          "ja": "ユーザーからの苦情件数だけを指標にする"
        },
        {
          "letter": "D",
          "ja": "評価は不要で、目視確認のみで十分"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "唯一の正解がない生成タスクでは、正確性・網羅性・トーンなど複数軸のルーブリックに分解した評価が定石。LLM-as-judgeはスケールする一方、判定基準や判定者自体の妥当性を人手でメタ評価する必要がある。"
    },
    {
      "id": 9,
      "domainLabel": "04: Evaluation, Testing & Optimization",
      "domainLink": "../topics/04-evaluation-testing-optimization/notes.html",
      "stemJa": "本番のエージェントシステムで、ある日突然コストが急増し、後から調べると一部のリクエストがツール呼び出しを繰り返す無限ループに陥っていたことが判明した。再発防止のために最も直接的に有効な組み合わせはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "モデルを軽量ティアに固定する"
        },
        {
          "letter": "B",
          "ja": "最大ツール呼び出し回数・最大実行時間などのガードレールを設け、異常なコスト急増を検知するアラートを監視基盤に追加する"
        },
        {
          "letter": "C",
          "ja": "全リクエストを人手レビューに切り替える"
        },
        {
          "letter": "D",
          "ja": "プロンプトキャッシュを無効化する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "エージェント型ループの暴走対策は、01章のステップ数/時間の上限設計と、04章の可観測性(コスト異常のアラート)を組み合わせて初めて実効性を持つ。"
    },
    {
      "id": 10,
      "domainLabel": "05: Governance, Safety & Risk Management",
      "domainLink": "../topics/05-governance-safety-risk/notes.html",
      "stemJa": "医療系スタートアップが、患者の問診内容を要約してカルテ下書きを生成するエージェントを構築している。生成された下書きは医師が確認前に一部そのまま採用されるリスクがある。ガバナンス設計として最も適切なものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "完全に人間の関与なし(human-out-of-the-loop)で運用し、生成速度を優先する"
        },
        {
          "letter": "B",
          "ja": "影響度の高いユースケースとしてリスク階層化し、医師による最終確認を必須とするhuman-in-the-loop設計とし、PIIの取り扱い・保存期間についても医療規制要件を確認する"
        },
        {
          "letter": "C",
          "ja": "ガードレールは不要で、モデル自体の安全性に任せる"
        },
        {
          "letter": "D",
          "ja": "患者データはプロンプトに含めず、一般的な医学知識のみで応答させる"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "医療・金銭など影響度の高い領域では、リスク階層化に基づき人間の最終承認を必須とする設計が原則。加えてPII・データレジデンシー等の規制対応も統合設計に組み込む必要がある。"
    },
    {
      "id": 11,
      "domainLabel": "05: Governance, Safety & Risk Management",
      "domainLink": "../topics/05-governance-safety-risk/notes.html",
      "stemJa": "社内で複数の部門が独自にサードパーティ製MCPサーバーを接続し始めている。あるサーバーは提供元が不明瞭で、権限スコープの説明も曖昧だった。アーキテクトとして取るべき最も適切な対応はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "MCPは標準プロトコルなので提供元を問わず自由に接続を許可する"
        },
        {
          "letter": "B",
          "ja": "中央でMCPサーバーの承認済みレジストリを整備し、提供元の信頼性・権限スコープ・監査可能性を事前レビューするガバナンスプロセスを導入する"
        },
        {
          "letter": "C",
          "ja": "MCPの利用自体を全社的に禁止する"
        },
        {
          "letter": "D",
          "ja": "各部門の裁量に完全に任せ、事後報告のみを求める"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "MCPサーバーはツール実行の窓口でありサプライチェーンリスクになり得る。組織規模での統合では中央レジストリによる事前承認・権限スコープレビューのガバナンスが必要(03章・05章)。"
    },
    {
      "id": 12,
      "domainLabel": "05: Governance, Safety & Risk Management",
      "domainLink": "../topics/05-governance-safety-risk/notes.html",
      "stemJa": "本番のエージェントが誤って顧客に不適切な内容を送信するインシデントが発生した。初動対応として最も優先すべきものはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "直ちに原因究明のための詳細な技術調査だけを開始し、システムは稼働継続させる"
        },
        {
          "letter": "B",
          "ja": "問題のあるプロンプト/モデルバージョンをロールバックまたはkill switchで停止し(封じ込め)、その後に事後分析(blameless postmortem)を行い、法務・広報等への適切なエスカレーションを行う"
        },
        {
          "letter": "C",
          "ja": "個人の責任追及を行い、再発防止は本人の注意力向上に委ねる"
        },
        {
          "letter": "D",
          "ja": "何もアナウンスせず静観する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "インシデント対応の基本順序は「検知→封じ込め(kill switch/ロールバック)→事後分析→エスカレーション」。個人追及ではなくblameless postmortemで再発防止に落とし込むのが定石。"
    },
    {
      "id": 13,
      "domainLabel": "06: Stakeholder Communication & Lifecycle Management",
      "domainLink": "../topics/06-stakeholder-communication-lifecycle/notes.html",
      "stemJa": "エグゼクティブ会議で、あるアーキテクトが新しいエージェントシステムの導入を提案することになった。技術的には最先端モデルを使う設計だが、経営層の関心は主にリスクとコストにある。最も効果的なプレゼンの組み立て方はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "モデルのパラメータ数やベンチマークスコアなど技術的優位性を中心に説明する"
        },
        {
          "letter": "B",
          "ja": "eval結果(成功率・エラー率)による品質の定量的根拠、想定コスト(TCOベース)、リスク階層と対応する人間関与レベルを、ビジネス影響の言葉で説明する"
        },
        {
          "letter": "C",
          "ja": "技術詳細は伏せ、「AIだから大丈夫」という前提で説明を省略する"
        },
        {
          "letter": "D",
          "ja": "競合他社も導入しているという事実のみを根拠にする"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "経営層への説明は技術詳細でなく、定量的な品質根拠・コスト・リスク対応をビジネス価値の言葉に翻訳して伝えることが中核スキル(06章)。"
    },
    {
      "id": 14,
      "domainLabel": "06: Stakeholder Communication & Lifecycle Management",
      "domainLink": "../topics/06-stakeholder-communication-lifecycle/notes.html",
      "stemJa": "全社展開を予定しているAIアシスタント機能について、現場部門から「使い方が分からず定着しない」という懸念が導入前から出ている。最も適切な対応はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "展開後にFAQを作成すれば十分であり、事前の対応は不要"
        },
        {
          "letter": "B",
          "ja": "設計初期段階から対象部門を巻き込み(co-design)、各部門にチェンジチャンピオンを置いてトレーニングと草の根の定着支援を行う体制を展開計画に組み込む"
        },
        {
          "letter": "C",
          "ja": "現場の懸念は無視し、経営トップダウンで強制利用させる"
        },
        {
          "letter": "D",
          "ja": "定着しない部門は展開対象から除外する"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "変更管理の基本は現場の早期巻き込み(co-design)とチェンジチャンピオンによる草の根定着支援。トップダウン強制は当事者意識を損ない、長期的な定着率を下げやすい。"
    },
    {
      "id": 15,
      "domainLabel": "06: Stakeholder Communication & Lifecycle Management",
      "domainLink": "../topics/06-stakeholder-communication-lifecycle/notes.html",
      "stemJa": "Anthropicが、現在本番で利用中のモデルバージョンについて数ヶ月後の廃止(deprecation)を予告した。アーキテクトとして最初に着手すべきことはどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "廃止予告を無視し、廃止日まで何もしない"
        },
        {
          "letter": "B",
          "ja": "影響を受けるプロンプト・評価セット・システムプロンプトの棚卸しを行い、後継モデルでの回帰テスト・段階的移行計画を早期に立てる"
        },
        {
          "letter": "C",
          "ja": "直ちに全システムを停止する"
        },
        {
          "letter": "D",
          "ja": "廃止予告に対し、独自にモデルをフォークして自社運用に切り替える"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "モデル廃止は定期的に発生するイベントであり、影響範囲の棚卸しと回帰テストを伴う計画的な移行が必要(06章のベンダー関係管理・ライフサイクル管理)。"
    },
    {
      "id": 16,
      "domainLabel": "07: Developer Productivity & Operational Enablement",
      "domainLink": "../topics/07-developer-productivity-operational-enablement/notes.html",
      "stemJa": "複数の開発チームが、それぞれ独自のエージェント実装パターンでプロジェクトを立ち上げており、認証・ロギング・ガードレールの実装品質にばらつきが出ている。プラットフォームチームが取るべき最も効果的な施策はどれか。",
      "options": [
        {
          "letter": "A",
          "ja": "全チームに個別に実装レビューを行い、都度指摘する場当たり的な対応を続ける"
        },
        {
          "letter": "B",
          "ja": "認証・ロギング・評価フック・ガードレールをあらかじめ組み込んだゴールデンパス(標準テンプレート)を整備し、標準から外れる場合のみ軽量な例外プロセスを設ける"
        },
        {
          "letter": "C",
          "ja": "新規プロジェクトの立ち上げを一時的に全面禁止する"
        },
        {
          "letter": "D",
          "ja": "各チームの裁量を最大化するため、標準化は行わない"
        }
      ],
      "correct": [
        "B"
      ],
      "explanation": "ゴールデンパス/テンプレートにガバナンス要件を組み込み「安全な作り方が最も簡単な作り方」にすることが、開発者生産性とガバナンスを両立させる07章の中核パターン。個別レビューの都度対応はスケールしない。"
    }
  ]
};
