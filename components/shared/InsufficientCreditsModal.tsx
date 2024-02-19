"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
} from "@/components/ui/alert-dialog";


export const InsufficientCreditsModal = () => {
   const router = useRouter();

   return (
   <AlertDialog defaultOpen>
      <AlertDialogContent>
         <AlertDialogHeader>
            <div className="flex-between">
               <p className="p-16-semibold text-dark-400">Onvoldoende Credits</p>
               <AlertDialogCancel
                  className="border-0 p-0 hover:bg-transparent"
                  onClick={() => router.push("/profile")}
               >
                  <Image
                     src="/assets/icons/close.svg"
                     alt="credit coins"
                     width={24}
                     height={24}
                     className="cursor-pointer"
                  />
               </AlertDialogCancel>
            </div>

            <Image
               src="/assets/images/stacked-coins.png"
               alt="credit coins"
               width={462}
               height={122}
            />

            <AlertDialogTitle className="p-24-bold text-dark-600">
               Oeps... Het lijkt erop dat je geen gratis credits meer hebt!
            </AlertDialogTitle>

            <AlertDialogDescription className="p-16-regular py-3">
               Geen probleem, u kunt blijven genieten van onze diensten door credits aan te kopen.
            </AlertDialogDescription>
         </AlertDialogHeader>

         <AlertDialogFooter>
            <AlertDialogCancel
               className="button w-full bg-purple-100 text-dark-400"
               onClick={() => router.push("/profile")}
            >
               Nee, Annuleer
            </AlertDialogCancel>
            <AlertDialogAction
               className="button w-full bg-purple-gradient  bg-cover"
               onClick={() => router.push("/credits")}
            >
               Ja, Ga door
            </AlertDialogAction>
         </AlertDialogFooter>
      </AlertDialogContent>
   </AlertDialog>
   );
};