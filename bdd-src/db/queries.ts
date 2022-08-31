export const setApproved = (id: number, approved: boolean) =>
  `
    update titles
      set
      approved=${approved},
      updated_at=now()
    where id=${id}
    `;

export const finishProcessing = (id: number, error: string) =>
  `
    update titles
      set
      processing=false,
      processed=true,
      ${error ? `error=${error},` : ''}
      updated_at = now()
    where id = ${ id }
  `;