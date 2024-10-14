import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


export function LenguageToggle() {
    const pathname = usePathname();
    const [ptLink, setPtLink] = useState('')
    const [enLink, setEnLink] = useState('')

    useEffect(() => {
        const paths = pathname.split('/');
        if (paths.length == 4) {
            // ex: /pt/real-estate/income
            setPtLink(`/pt/${paths[2]}/${paths[3]}`)
            setEnLink(`/en/${paths[2]}/${paths[3]}`)
        } else if (paths.length == 3) {
            // ex: /real-estate/
            setPtLink(`/pt/${paths[2]}`)
            setEnLink(`/en/${paths[2]}`)
        } else if (paths.length == 2) {
            // ex: /
            setPtLink(`/pt`)
            setEnLink(`/en`)
        }
    }, [pathname])

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="hover:border-primary" variant="outline" size="icon">
            <Languages />
            <span className="sr-only">Toggle Languages</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Link href={ ptLink }>  Português </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={ enLink }>  English </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  