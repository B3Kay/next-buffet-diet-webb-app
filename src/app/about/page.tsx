
import { Star, Users, Utensils, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

export default function AboutPage() {


    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                {/* <img
                    src="/placeholder.svg?height=1080&width=1920"
                    alt="Buffet spread"
                    className="absolute inset-0 w-full h-full object-cover"
                /> */}
                <div className="absolute inset-0 bg-black/50" />
                <h1

                    className="text-4xl md:text-6xl font-bold text-white text-center z-10"
                >
                    About The Buffet Diet
                </h1>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-4 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                    At The Buffet Diet, we&apos;re on a mission to help buffet lovers discover the best buffet experiences around the world.
                    Through honest in details reviews, and a passion for all-you-can-eat delights, we&apos;re your trusted guide in
                    the world of buffets.
                </p>
            </section>

            {/* Values Section */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Star, title: 'Quality', description: 'We believe in highlighting truly exceptional buffet experiences.' },
                            { icon: Users, title: 'Community', description: 'Our strength lies in our diverse community of food enthusiasts.' },
                            { icon: Utensils, title: 'Variety', description: 'We celebrate the rich diversity of cuisines in buffets worldwide.' }
                        ].map((value, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <value.icon className="w-6 h-6 mr-2" />
                                        {value.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
                    <Avatar className="w-64 h-64 mb-8 md:mb-0 md:mr-8">
                        <AvatarImage src="/placeholder.svg?height=400&width=400" alt="Founder" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
                        <p className="text-xl text-muted-foreground mb-4">
                            Benjamin Karlsson, a lifelong biohacker and buffet addict, founded The Buffet Diet in 2020. With a background
                            in Engineering and a passion for diets.
                        </p>
                        <blockquote className="text-xl italic border-l-4 border-primary pl-4">
                            &ldquo;When you&apos;re on a any kind of diet, buffets can feel like a landmine of carbs and seed oils. Google wasn&apos;t counting my macros, so I created The Buffet Diet —because avoiding carbs should be easier than avoiding your ex.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </section>



            {/* Join Us Section */}
            < section className="py-24 bg-primary text-primary-foreground">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join the The Buffet Diet Community</h2>
                    <p className="text-xl mb-8">
                        Become a part of our food-loving family. Share your experiences, discover new buffets, and contribute to the community.
                    </p>
                    <Link href="/authentication" passHref legacyBehavior>
                        <Button size="lg" variant="secondary">
                            Sign Up Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div >
    )
}