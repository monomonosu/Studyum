'use client'

import { BasicButton } from '@/components/Buttons/BasicButton'
import { TextInput } from '@/components/Forms/TextInput'
import { TextArea } from '@/components/Forms/TextArea'
import { ContentTitle } from '@/components/Uis/ContentTitle'
import { PageTitle } from '@/components/Uis/PageTitle'
import utils from '@/styles/utils/index.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { RadioGroup } from '@/components/Forms/RadioGroup'
import { PASSION_OPTIONS, PLATFORM_OPTIONS } from '@/features/common/constant'
import { TagSelect } from '@/components/Forms/TagSelect'
import { useRegister } from '@/features/register/hooks/useRegister'

/**
 * @todo 仮のタグオプションなので後で削除する
 */
const dummyTagOptions = [
  { value: '1', label: 'もくもく会' },
  { value: '2', label: '勉強会' },
  { value: '3', label: 'React' }
]

export default function SessionRegister() {
  const { form, onSubmit } = useRegister()
  const errors = form.formState.errors
  return (
    <form>
      <PageTitle title='セッション募集' />
      <div
        className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-20'])}
        style={{ padding: '30px 0' }}
      >
        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='ユーザー名' color='info' />
            <TextInput
              register={form.register('name')}
              message={errors.name?.message}
              error={'name' in errors}
              placeholder='田中　太郎'
            />
          </div>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='タイトル' color='info' />
            <TextInput
              register={form.register('title')}
              message={errors.title?.message}
              error={'title' in errors}
              placeholder='もくもく会メンバー募集'
            />
          </div>
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='タグ' color='info' />
            <TagSelect
              name='tags'
              control={form.control}
              options={dummyTagOptions}
              placeholder='もくもく会'
              message={errors.tags?.message}
              error={'tags' in errors}
            />
          </div>
        </div>

        <div
          className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
          style={{ width: '100%' }}
        >
          <ContentTitle title='プラットフォーム' color='info' />
          <RadioGroup
            register={form.register('platform')}
            name='platform'
            options={PLATFORM_OPTIONS}
          />
        </div>

        <div className={clsx(utils['tow-column-wrapper'], utils['gap-8'])}>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='URL' color='info' />
            <TextInput
              register={form.register('url')}
              message={errors.url?.message}
              error={'url' in errors}
              placeholder='https://meet.google.com/xxx-xxx-xxx'
            />
          </div>
          <div
            className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
            style={{ width: '100%' }}
          >
            <ContentTitle title='パスワード' color='info' />
            <TextInput
              register={form.register('password')}
              message={errors.password?.message}
              error={'password' in errors}
              placeholder='password'
            />
          </div>
        </div>

        <div
          className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}
          style={{ width: '100%' }}
        >
          <ContentTitle title='ガチ度' color='info' />
          <RadioGroup
            register={form.register('passion')}
            name='passion'
            options={PASSION_OPTIONS}
          />
        </div>

        <div className={clsx(utils['gap-wrapper'], utils['direction-column'], utils['gap-12'])}>
          <ContentTitle title='コメント' color='info' />
          <TextArea
            register={form.register('comment')}
            message={errors.comment?.message}
            error={'comment' in errors}
            placeholder='気軽にご参加ください。'
            rows={4}
          />
        </div>

        <div className={clsx(utils['center-wrapper'])}>
          <BasicButton
            color='success'
            variant='contained'
            text='セッションを募集する'
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
    </form>
  )
}
