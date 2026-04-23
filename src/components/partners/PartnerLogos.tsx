/** Logos vetoriais (marcas registradas dos respectivos titulares). Sempre escalar via container — sem dimensões fixas no uso. */

const svgCommon = "block max-h-full max-w-full object-contain";

export function MicrosoftLogo({ className }: { className?: string }) {
  return (
    <svg
      className={`${svgCommon} ${className ?? ""}`}
      viewBox="0 0 23 23"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="#f25022" d="M1 1h10v10H1z" />
      <path fill="#7fba00" d="M12 1h10v10H12z" />
      <path fill="#00a4ef" d="M1 12h10v10H1z" />
      <path fill="#ffb900" d="M12 12h10v10H12z" />
    </svg>
  );
}

/**
 * Wordmark estilo AWS: “aws” em laranja oficial + curva (smile) centralizada.
 * Centralizado no viewBox para escalar limpo no container 80×48.
 */
export function AwsLogo({ className }: { className?: string }) {
  const orange = "#FF9900";
  return (
    <svg
      className={`${svgCommon} ${className ?? ""}`}
      viewBox="0 0 100 38"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="50"
        y="22"
        fill={orange}
        textAnchor="middle"
        fontFamily="Helvetica Neue, Helvetica, Arial, system-ui, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        aws
      </text>
      <path
        fill="none"
        stroke={orange}
        strokeWidth="3"
        strokeLinecap="round"
        d="M 24 30 Q 50 40 76 30"
      />
    </svg>
  );
}

export function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={`${svgCommon} ${className ?? ""}`}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

/** Wordmark proporcional (evita “retângulo achatado” de paths genéricos). */
export function DellLogo({ className }: { className?: string }) {
  return (
    <svg
      className={`${svgCommon} ${className ?? ""}`}
      viewBox="0 0 100 26"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#007DB8"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        fontSize="17"
        fontWeight="800"
        letterSpacing="0.28em"
      >
        DELL
      </text>
    </svg>
  );
}

export function FirebaseLogo({ className }: { className?: string }) {
  return (
    <svg
      className={`${svgCommon} ${className ?? ""}`}
      viewBox="0 0 111 151"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path fill="#FFA000" d="M0 120l55-30 17 31-55 30L0 120z" />
      <path fill="#F57C00" d="M55 90L72 59l39 22-17 31-39-22z" />
      <path fill="#FFCA28" d="M55 90L17 68 55 0l38 68-38 22z" />
      <path fill="#FFA000" d="M55 0l17 59L55 90V0z" opacity="0.85" />
    </svg>
  );
}
