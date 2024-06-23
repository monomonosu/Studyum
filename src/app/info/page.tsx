import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'
import { BasicButton } from '@/components/Buttons/BasicButton'
import Image from 'next/image'

const InfoPage = async () => {
  return (
    <div className={utils['base-layout']}>
      <div
        className={clsx(
          utils['gap-wrapper'],
          utils['direction-column'],
          utils['gap-40'],
          utils['-mt-32'],
          utils['-mb-32'],
          utils['-ml-16'],
          utils['-mr-16']
        )}
      >
        <div
          className={clsx(
            utils['gap-wrapper'],
            utils['direction-column'],
            utils['gap-40'],
            utils['-mt-64'],
            utils['-mb-64']
          )}
        >
          <div className={clsx(utils['center-wrapper'])}>
            <p className={clsx(utils.text, utils['h1-size-large'], utils['weight-bold'])}>
              Studyumとは
            </p>
          </div>
          <div className={utils['center-wrapper']}>
            <Image src='/images/business_person.svg' alt='person' width={500} height={300} />
          </div>
          <div className={utils['center-wrapper']}>
            <p className={clsx(utils.text, utils['size-large'], utils['leading-loose'])}>
              Stydyumは学ぶ人同士を繋ぐプラットフォームです。
              <br />
              <br />
              一人だと学びに集中できず、サボりがち。でも、みんなと一緒にワイワイしながら勉強したり、相互に刺激を受けながら取り組みたいと感じている人も多いはずです。そんな時に便利なのが、Studyumです。
              <br />
              <br />
              Studyumを使えば、気軽にもくもく会を開くことができます。このプラットフォームは、学ぶ意欲を持つ人々を簡単に繋げる事ができます。自分が勉強したいテーマや課題を共有し、同じ興味を持つ仲間と一緒に進めることで、自然とモチベーションが上がります。
              <br />
              <br />
              一人ではなかなか続けられない勉強も、仲間と一緒なら楽しく続けられる。Studyumは、そんな学びの場を提供するためのプラットフォームです。
              <br />
              <br />
              Studyumで、学ぶ楽しさを再発見してみましょう！
            </p>
          </div>
        </div>

        <hr style={{ color: '#f5f5f5' }} />

        <div
          className={clsx(
            utils['gap-wrapper'],
            utils['direction-column'],
            utils['gap-40'],
            utils['-mt-64'],
            utils['-mb-64']
          )}
        >
          <div className={clsx(utils['center-wrapper'])}>
            <p className={clsx(utils.text, utils['h1-size-large'], utils['weight-bold'])}>
              もくもく会って？
            </p>
          </div>
          <div className={utils['center-wrapper']}>
            <Image src='/images/meeting.svg' alt='meeting' width={500} height={300} />
          </div>
          <div className={utils['center-wrapper']}>
            <p className={clsx(utils.text, utils['size-large'], utils['leading-loose'])}>
              もくもく会は、みんなで集まって自分のやりたいことに集中するためのイベントです。名前の通り、「もくもく」と静かに取り組む時間を楽しむことができます。
              <br />
              <br />
              もくもく会では、各自が持ち寄ったプロジェクトや課題に黙々と取り組みます。例えば、プログラミングを進めたい人、本を読みたい人、勉強をしたい人など、内容は自由です。もくもく会の良いところは、一緒にいるだけで適度な緊張感があり、みんなの存在が自然とモチベーションを高めてくれることです。
              <br />
              <br />
              基本的には静かに作業をしますが、休憩時間や終わった後には成果をシェアしたり、質問したりする時間もあります。これによって、新しい知識を得たり、困っていることを解決したりすることができます。
              <br />
              <br />
              誰でも気軽に参加できるので、自分のペースで集中したい時にピッタリのイベントです。もくもく会は、集中して取り組むための最高の時間を提供してくれますよ！
            </p>
          </div>
        </div>

        <hr style={{ color: '#f5f5f5' }} />

        <div
          className={clsx(
            utils['gap-wrapper'],
            utils['direction-column'],
            utils['gap-40'],
            utils['-mt-64'],
            utils['-mb-64']
          )}
        >
          <div className={clsx(utils['center-wrapper'])}>
            <p className={clsx(utils.text, utils['h1-size-large'], utils['weight-bold'])}>
              Studyumを使ってみよう！
            </p>
          </div>
          <div className={utils['center-wrapper']} style={{ width: '100%' }}>
            <Image src='/images/banzai.svg' alt='banzai' width={500} height={300} />
          </div>
          <div className={utils['center-wrapper']}>
            <p className={clsx(utils.text, utils['size-large'], utils['leading-loose'])}>
              Studyumなら簡単にもくもく会を開催できます！
              <br />
              <br />
              早速使ってみよう！
            </p>
          </div>
        </div>

        <div className={clsx(utils['center-wrapper'], utils['-mb-64'])}>
          <div className={clsx(utils['gap-wrapper'], utils['direction-row'], utils['gap-40'])}>
            <BasicButton
              color='success'
              variant='contained'
              text='Studyumの使い方'
              width='300px'
              className='-shadow'
            />
            <BasicButton
              color='success'
              variant='contained'
              text='もくもく会を開催する！'
              width='300px'
              className='-shadow'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoPage
