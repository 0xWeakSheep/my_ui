"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-[80px] font-bold leading-none tracking-tighter text-text-tertiary/20 md:text-[120px]">
            出错了
          </p>
          <h1 className="text-2xl font-bold text-text-primary">
            出现了一些问题
          </h1>
          <p className="mt-4 max-w-md text-base text-text-secondary">
            页面渲染时遇到了错误。你可以尝试刷新页面，或者返回首页。
          </p>
          {this.state.error && (
            <pre className="mt-6 max-w-lg overflow-auto rounded-lg border border-border-subtle bg-bg-elevated p-4 text-left text-xs text-text-tertiary">
              {this.state.error.message}
            </pre>
          )}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => window.location.reload()}
              className="rounded-md border border-border-subtle bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-gold/60 hover:text-accent-amber"
            >
              刷新页面
            </button>
            <Link
              href="/"
              className="rounded-md border border-border-subtle bg-bg-elevated px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent-gold/60 hover:text-accent-amber"
            >
              返回首页
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
