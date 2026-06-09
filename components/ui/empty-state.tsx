interface EmptyStateProps {
  message?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  message = "暂无内容",
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-text-tertiary">
      {icon || (
        <svg
          className="h-12 w-12 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      )}
      <p className="mt-4 text-sm">{message}</p>
    </div>
  );
}
