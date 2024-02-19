"use client";

import { useTransition } from "react";

import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteImage } from "@/lib/actions/image.actions";

import { Button } from "../ui/button";

export const DeleteConfirmation = ({ imageId }: { imageId: string }) => {
   const [isPending, startTransition] = useTransition();

   return (
      <AlertDialog>
         <AlertDialogTrigger asChild className="w-full rounded-full">
            <Button
               type="button"
               className="button h-[44px] w-full md:h-[54px]"
               variant="destructive"
            >
               Verwijder Afbeelding
            </Button>
         </AlertDialogTrigger>

         <AlertDialogContent className="flex flex-col gap-10">
            <AlertDialogHeader>
               <AlertDialogTitle>
                  Weet u zeker dat u deze afbeelding wilt verwijderen?
               </AlertDialogTitle>
               <AlertDialogDescription className="p-16-regular">
                  Hierdoor wordt deze afbeelding definitief verwijderd
               </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
               <AlertDialogCancel>Annuleren</AlertDialogCancel>
               <AlertDialogAction
                  className="border bg-red-500 text-white hover:bg-red-600"
                  onClick={() =>
                  startTransition(async () => {
                     await deleteImage(imageId);
                  })
                  }
               >
                  {isPending ? "Deleting..." : "Delete"}
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
};