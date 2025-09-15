/* コンタクトページ */

'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedLeaves } from '../components/leafAnimation';
import { formSchema, SubmitFormData } from '@/lib/validation';
import { NextPage } from 'next';
import { toast } from 'react-hot-toast';
import { client } from '@/lib/HonoClient';

const ContactPage: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<SubmitFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<SubmitFormData> = (data) => {
        setIsLoading(true);

        toast.promise(
            new Promise<string>(async (resolve, reject) => {
                try {
                    const res = await client.api.contact.sendEmail.$post({
                        json: { name: data.name, email: data.email, message: data.message },
                    });

                    const resData = await res.json();

                    if (res.ok && resData.success) {
                        form.reset();
                        resolve(`${resData.message}`);
                    } else {
                        reject(`${resData.message}`);
                    }
                } catch (error) {
                    console.log(`サーバーエラーが発生しました: ${error}`);
                    reject(`サーバーエラーが発生しました: ${error}`);
                } finally {
                    setIsLoading(false);
                }
            }),
            {
                loading: '送信中...',
                success: (message: string) => message,
                error: (message: string) => message,
            }
        );
    };

    return (
        <div className="relative bg-[#1A0F00] text-amber-200 min-h-screen md:fixed md:inset-0 md:flex md:items-center md:justify-center md:h-screen md:overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <AnimatedLeaves />
            </div>

            {/* コンテンツラッパー（モバイルは上下余白でスクロール可） */}
            <div className="relative z-10 w-full px-4 py-8 sm:px-6 sm:py-12 md:py-0">
                <div className="mx-auto w-full max-w-[92%] sm:max-w-lg md:max-w-2xl rounded-2xl border border-neutral-700 bg-[#402600]/95 backdrop-blur-md p-6 sm:p-7 md:p-8 shadow-xl">
                    <h1 className="mb-5 sm:mb-6 text-center text-2xl sm:text-3xl font-bold text-amber-200">
                        Contact
                    </h1>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 sm:space-y-6"
                        >
                            <FormField
                                control={form.control}
                                disabled={isLoading}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-amber-200">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your Name"
                                                autoComplete="name"
                                                className="bg-[#fffacd] border-[#708090] border-2 text-gray-500 placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                disabled={isLoading}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-amber-200">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="your.email@example.com"
                                                autoComplete="email"
                                                inputMode="email"
                                                className="bg-[#fffacd] border-[#708090] border-2 text-gray-500 placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                disabled={isLoading}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-amber-200">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Contents"
                                                className="bg-[#fffacd] border-[#708090] border-2 text-gray-500 placeholder:text-gray-500 resize-y min-h-30 sm:min-h-28 focus:border-amber-500 focus:ring-amber-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-md transition"
                            >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
