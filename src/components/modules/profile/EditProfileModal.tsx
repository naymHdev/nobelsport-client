" use client";

import NSButton from "@/components/ui/core/NSButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EditProfileModal = () => {
  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger>
            {" "}
            <NSButton className=" bg-ns-secondary text-white rounded-lg py-3">
              Edit Profile
            </NSButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default EditProfileModal;
