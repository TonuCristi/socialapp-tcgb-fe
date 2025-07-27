import z from "zod";

export const createPostFormSchema = z
  .object({
    content: z.string().max(500, {
      message: "The content should't be longer than 500 characters!",
    }),
    photos: z
      .transform((val: File[]) => {
        return val ? Array.from(val) : [];
      })
      .refine(
        (files) => {
          if (!files.length) return true;

          return files.length <= 5;
        },
        { message: "You can upload up to 5 files only." }
      )
      .refine(
        (files) => {
          if (!files.length) return true;

          return files.every(
            (file) =>
              file.size >= 10_000 &&
              file.size <= 5_000_000 &&
              ["image/png", "image/jpeg"].includes(file.type)
          );
        },
        {
          message:
            "Each file must be PNG or JPEG and between 10KB and 5MB in size.",
        }
      ),
  })
  .check((ctx) => {
    const content = ctx.value.content;
    const photos = ctx.value.photos;

    if (!content.length && !photos.length) {
      ctx.issues.push({
        code: "custom",
        message:
          "To create a post, please write something or add at least one photo.",
        input: ctx.value,
        path: ["photos"],
      });
    }
  });
