import React from "react";
export type Comments = {
  id: number;
  author: string;
  text: string;
  likes: number;
  date: Date;
  image: string;
};

export type AdminCardProps = {
  title: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreateNewComment: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export interface CommentCardProps extends Comments {
  handleDelete: (id: number) => void;
  handleSaveChanges: (id: number, updatedValue: string) => Promise<void>;
}
