import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Form } from "radix-ui"


const LoginPage = () => {
    return (
        <>
        
         {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold  mb-2">Login</h1>
                <p className="text-muted-foreground text-sm">Enter your account details to login</p>
            </div>

            {/* Form */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className=" text-sm font-medium">Email</FormLabel>
                                <FormControl>
                                    <div className="relative flex items-center rtl:flex-row-reverse">
                                        <Mail className="absolute left-3 top-2 rtl:right-3 size-4 text-slate-500" />
                                        <Input placeholder='Enter your email' className="border border-input pl-10 pr-10   placeholder-muted-foreground " {...field} />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="relative">
                                <FormLabel className=" text-sm font-medium">Password</FormLabel>
                                <FormControl>
                                    <div className="relative flex flex-col items-end">
                                        <Lock className="absolute left-3 top-2 rtl:right-3 size-4 text-slate-500" />
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your Password"
                                            autoComplete="new-password"
                                            className="border border-input pl-10 pr-10   placeholder-muted-foreground "
                                            {...field}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 rtl:right-11/12 top-3 text-muted-foreground hover:text-foreground"
                                        >
                                            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                        </button>

                                        <Link className="underline w-fit mt-2 text-sm text-muted-foreground" href={"/auth/forgot-password"}>forgot password?</Link>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit" className='w-full' variant="default" disabled={isPending}>
                        {isPending ?
                            <Loader2 className='size-4 animate-spin transition-all' />
                            :
                            ""
                        }
                        Sign In
                    </Button>


                

                 

                    {/* Sign Up Link */}
                    <p className="text-center text-slate-400 text-sm">
                         &lsquo;لا تملك حساب ?&rsquo;
                        <Link href="/auth/register" className="text-blue-400 hover:text-blue-300 font-semibold">
                            تسجيل جديد
                        </Link>
                    </p>
                </form>
            </Form>
        
        </>
    )
}

export default LoginPage