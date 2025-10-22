import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BadgeDollarSign,
  Bike,
  BookHeart,
  BriefcaseBusiness,
  Calendar,
  ChevronRight,
  ClockIcon,
  Cpu,
  FlaskRound,
  HeartPulse,
  Scale,
} from "lucide-react";
import { Link } from "react-router";

const categories = [
  {
    name: "Technology",
    totalPosts: 10,
    icon: Cpu,
  },
  {
    name: "Business",
    totalPosts: 5,
    icon: BriefcaseBusiness,
  },
  {
    name: "Finance",
    totalPosts: 8,
    icon: BadgeDollarSign,
  },
  {
    name: "Health",
    totalPosts: 12,
    icon: HeartPulse,
  },
  {
    name: "Lifestyle",
    totalPosts: 15,
    icon: BookHeart,
  },
  {
    name: "Politics",
    totalPosts: 20,
    icon: Scale,
  },
  {
    name: "Science",
    totalPosts: 25,
    icon: FlaskRound,
  },
  {
    name: "Sports",
    totalPosts: 30,
    icon: Bike,
  },
];

const MainSection = () => {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto py-10 lg:py-16 px-6 xl:px-0 flex flex-col lg:flex-row items-start gap-12">
      <div>
        <h3 className="text-center lg:text-left text-2xl font-semibold"> Our Blogs </h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i} className="shadow-none overflow-hidden rounded-md py-0">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="pb-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  Technology
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  5 min read
                </span>
              </div>
              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                A beginner&apos;s guide to blackchain for engineers
              </h3>
              <Button asChild size="sm" className="mt-6 shadow-none">
                <Link to="/single-blog/abc">
                  Read more <ChevronRight />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
      <aside className="sticky top-8 shrink-0 lg:max-w-[220px] w-full">
        <h3 className="text-xl font-semibold tracking-tight">Categories</h3>
        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center justify-between gap-2 bg-muted p-3 rounded-md bg-opacity-15 dark:bg-opacity-25"
            >
              <div className="flex items-center gap-3">
                <category.icon className="h-5 w-5" />
                <span className="font-medium">{category.name}</span>
              </div>
              <Badge className="px-1.5 rounded-full bg-foreground/7 text-foreground">
                {category.totalPosts}
              </Badge>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default MainSection;
