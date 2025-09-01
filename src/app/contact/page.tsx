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
        <div className="fixed inset-0 flex items-center justify-center bg-[#1A0F00] overflow-hidden">
            <AnimatedLeaves />
            <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-neutral-700 bg-[#402600] backdrop-blur-md p-8 shadow-xl">
                <h1 className="mb-6 text-center text-3xl font-bold text-amber-200">Contact Me</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                            className="bg-[#fffacd] border-[#708090] border-2 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
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
                                            className="bg-[#fffacd] border-[#708090] border-2 placeholder:text-gray-400 focus:border-amber-500 focus:ring-amber-500"
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
                                            className="bg-[#fffacd] border-[#708090] border-2 placeholder:text-gray-400 resize-none focus:border-amber-500 focus:ring-amber-500"
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
                            className="cursor-pointer w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ContactPage;
