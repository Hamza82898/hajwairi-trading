"use client";

import { useState, useTransition } from "react";

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

import { deleteCategory } from "@/actions/category";

interface Props {
    id: number;
}

export default function DeleteCategoryButton({
    id,
}: Props) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [pending, startTransition] = useTransition();

    function handleDelete() {
        startTransition(async () => {
            const result = await deleteCategory(id);

            if (!result.success) {
                setMessage(result.message);
                return;
            }

            setOpen(false);
        });
    }

    return (
        <>
            {message && (
                <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {message}
                </div>
            )}

            <AlertDialog
                open={open}
                onOpenChange={setOpen}
            >
                <AlertDialogTrigger 
                    className="rounded bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                >    
                    Delete   
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete Category
                        </AlertDialogTitle>

                        <AlertDialogDescription>
                            This action cannot be undone.
                            <br />
                            The category will be permanently deleted.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            onClick={(e) => {
                                e.preventDefault();
                                handleDelete();
                            }}
                            disabled={pending}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            {pending
                                ? "Deleting..."
                                : "Delete"
                            }
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}