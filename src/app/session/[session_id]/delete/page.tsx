'use client'

import { ContentTitle } from '@/components/Uis/ContentTitle'
import { PageTitle } from '@/components/Uis/PageTitle'
import { PASSIONS_NUM_TO_TEXT, PLATFORM_NUM_TO_TEXT_ICON } from '@/features/common/constant'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'
import { BasicButton } from '@/components/Buttons/BasicButton'
import Link from 'next/link'
import { BasicChip } from '@/components/Buttons/BasicChip'
import { TextInput } from '@/components/Forms/TextInput'
import { useDelete } from '@/features/delete/hooks/useDelete'

export default function SessionDetail() {
  const { sessionDetail, form, onSubmit } = useDelete()
  const errors = form.formState.errors
  return (
    <>
      <PageTitle title='セッション削除' />
      <div
        className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-20'])}
        style={{ padding: '30px 0' }}
      >
        <ContentTitle title={sessionDetail?.title} color='info' />

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ユーザー名' color='info' />
            <p className={clsx(utils.text, utils['size-large'])}>{sessionDetail?.user_name}</p>
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-row'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='タグ' color='info' />
            {sessionDetail?.tags.map((tag) => (
              <BasicChip key={tag.id} text={tag.name} className='-text-black' />
            ))}
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-row'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='プラットフォーム' color='info' />
            {sessionDetail?.platform ? (
              <>
                <span>{PLATFORM_NUM_TO_TEXT_ICON[sessionDetail.platform].icon}</span>{' '}
                <span
                  className={clsx(utils.text, utils['size-large'])}
                  style={{ lineHeight: '24px' }}
                >
                  {PLATFORM_NUM_TO_TEXT_ICON[sessionDetail.platform].label}
                </span>
              </>
            ) : (
              ''
            )}
          </div>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='URL' color='info' />
            <p className={clsx(utils.text, utils['size-large'])}>{sessionDetail?.url}</p>
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-16'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ガチ度' color='info' />
            {sessionDetail?.passion_level ? (
              <p className={clsx(utils.text, utils['size-large'])}>
                {PASSIONS_NUM_TO_TEXT[sessionDetail.passion_level]}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
          style={{ width: '100%' }}
        >
          <ContentTitle title='コメント' color='info' />
          <p className={clsx(utils.text, utils['size-large'])}>{sessionDetail?.content}</p>
        </div>

        <div
          className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
          style={{ width: '100%' }}
        >
          <ContentTitle title='パスワード' color='info' required />
          <TextInput
            register={form.register('password')}
            message={errors.password?.message}
            error={'password' in errors}
            placeholder='password'
          />
        </div>

        <div className={clsx(utils['center-wrapper'], utils['gap-40'])}>
          <BasicButton
            color='error'
            variant='contained'
            text='セッションを削除する'
            width='200px'
            className='-shadow'
            onClick={form.handleSubmit(onSubmit)}
          />
        </div>

        <div className={clsx(utils['center-wrapper'])}>
          <Link href='/'>
            <BasicButton
              color='info'
              variant='contained'
              text='TOPに戻る'
              width='200px'
              className='-shadow'
            />
          </Link>
        </div>
      </div>
    </>
  )
}
