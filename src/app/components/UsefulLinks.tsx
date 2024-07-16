import { Button } from "@/components/ui/button"

type props = {
    articles?: link[]
    videos?: link[]
}

type link = {
    name: string
    url: string
}



export default function UsefulLinks(links: props) {
    return (
        <div className="mt-8">
            <h5 className="font-semibold tracking-tight">Useful Links:</h5>
            <div className="flex flex-col gap-4">
                <Articles articles={links.articles as link[]} />
                <Videos videos={links.videos as link[]} />
            </div>
        </div>
    )
}

function Articles({ articles }: { articles: link[] }) {
    if (!articles) return <></>
    return <div className="w-auto">
        <h5>Articles: </h5>
        <div className="flex flex-wrap justify-center">
            {
                articles.map((article) => {
                    return (
                        <div key={article.name}>
                            <Button variant='link'>
                                <a className="text-blue-700" href={article.url} target="_blank">{article.name}</a>
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    </div>
}

function Videos({ videos }: { videos: link[] }) {
    if (!videos) return <></>

    return <div className="w-auto">
        <h5>Videos: </h5>
        <div className="flex flex-wrap justify-center">
            {
                videos.map((video) => {
                    return (
                        <div key={video.name}>
                            <Button variant='link'>
                                <a className="text-blue-700" href={video.url} target="_blank">{video.name}</a>
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    </div>
}
