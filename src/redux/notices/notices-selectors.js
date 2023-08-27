export const selectNotices = state => state.notices.items;
export const selectNoticeItem = state => state.notices.oneNotice;
export const selectFiltredNotices = state => state.notices.filtredNotice;
export const selectIsLoading = state => state.notices.isLoading;
export const selectError = state => state.notices.error;