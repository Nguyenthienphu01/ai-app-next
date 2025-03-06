'use client';
import React from 'react';

import {
  ControlledForm,
  ControlledFormInput,
  ControlledFormTextarea,
} from '@/shared/ui/controlled/form';

import { ControlledButton } from '@/shared/ui/controlled/button';

import { useForm } from 'react-hook-form';
import { Sumary, SumaryResolver } from '@/shared/types/sumary';

export const CreateDocumentForm: React.FC = () => {
  const form = useForm<Sumary>({
    resolver: SumaryResolver,
    mode: 'onSubmit',
    defaultValues: {
      sumary: '',
      prompt: '',
    },
  });

  const onSubmit = (data: Sumary) => {
    console.log(data);
  };

  return (
    <>
      <ControlledForm form={form} onSubmit={onSubmit} className="space-y-6">
        <ControlledFormInput name="sumary" label="概要を入れてください" />
        <ControlledFormTextarea
          name="prompt"
          label={
            <div className="flex flex-col space-y-2">
              <div>プロンプトを入力してください。</div>
              <div className="text-muted-foreground text-[12px]">
                つくりたい資料の概要、特徴、構成など、自由に入力してください
              </div>
            </div>
          }
          className="h-[264px] resize-none text-sm"
          rows={6}
        />
        <div className="text-right">
          <ControlledButton
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
          >
            次へ
          </ControlledButton>
        </div>
      </ControlledForm>
    </>
  );
};
