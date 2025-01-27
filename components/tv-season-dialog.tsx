"use client"

import { usePathname, useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-dialog"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TvSeasonDialogProps extends DialogProps {
  name?: string
  overview?: string
}

export const TvSeasonDialog: React.FC<TvSeasonDialogProps> = ({
  open,
  onOpenChange,
  name,
  overview,
  children,
  ...props
}) => {
  const router = useRouter()
  const pathname = usePathname()

  function handleOpenChange(open: boolean) {
    if (!open) {
      router.replace(pathname, { scroll: false })
    }
  }

  return (
    <Dialog open onOpenChange={handleOpenChange} {...props}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="max-w-screen-lg"
      >
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="line-clamp-3 md:line-clamp-none">
            {overview}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="aspect-square sm:aspect-video md:pr-4">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
