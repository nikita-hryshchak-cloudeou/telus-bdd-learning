module.exports = {
  getTitle: () =>
    `
    update titles
      set
      processing=true,
      updated_at=now()
    where id in (
      select id from titles
      where not processing
      and not processed
      limit 1
      )
    returning *
    `
};