export function getHeaderStyles(column) {
  const isPinned = column.getIsPinned();

  return {
    position: "sticky",

    top: 0,

    left: isPinned === "left" ? column.getStart("left") : undefined,

    right: isPinned === "right" ? column.getAfter("right") : undefined,

    zIndex: isPinned ? 50 : 30,

    background: "var(--background)",

    width: column.getSize(),
    minWidth: column.getSize(),

    boxShadow:
      isPinned === "left"
        ? "4px 0 8px rgba(0,0,0,.05)"
        : isPinned === "right"
        ? "-4px 0 8px rgba(0,0,0,.05)"
        : undefined,

    borderRight:
      isPinned === "left" ? "1px solid hsl(var(--border))" : undefined,

    borderLeft:
      isPinned === "right" ? "1px solid hsl(var(--border))" : undefined,
  };
}

export function getCellStyles(column) {
  const isPinned = column.getIsPinned();

  return {
    position: isPinned ? "sticky" : "relative",

    left: isPinned === "left" ? column.getStart("left") : undefined,

    right: isPinned === "right" ? column.getAfter("right") : undefined,

    zIndex: isPinned ? 20 : 0,

    background: "var(--background)",

    width: column.getSize(),
    minWidth: column.getSize(),

    boxShadow:
      isPinned === "left"
        ? "4px 0 8px rgba(0,0,0,.05)"
        : isPinned === "right"
        ? "-4px 0 8px rgba(0,0,0,.05)"
        : undefined,

    borderRight:
      isPinned === "left" ? "1px solid hsl(var(--border))" : undefined,

    borderLeft:
      isPinned === "right" ? "1px solid hsl(var(--border))" : undefined,
  };
}
