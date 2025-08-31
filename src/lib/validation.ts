/* バリデーションファイル */

import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().nonempty({
        message: 'お名前を入力してください',
    }),
    email: z
        .string()
        .nonempty({
            message: 'メールアドレスを入力してください',
        })
        .email({ message: '有効なメールアドレスを入力してください' }),
    message: z.string().nonempty({
        message: 'メッセージを入力してください',
    }),
});

export type SubmitFormData = z.infer<typeof formSchema>;
