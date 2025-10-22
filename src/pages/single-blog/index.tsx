import { Badge } from "@/components/ui/badge"
import NextPrevBlog from "@/pages/single-blog/nextPrevBlog"
import SinglePageContent from "@/pages/single-blog/singlePageContent"
import { Link } from "react-router"

const SingleBlog = () => {
  return (
    <>
        <SinglePageContent />
        <NextPrevBlog />
    </>
  )
}

export default SingleBlog
