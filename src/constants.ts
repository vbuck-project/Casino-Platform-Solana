import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = 'DxHYNTA6qeSK9A9h8gsRw7dzWnnqHVgKpArqQ8ixt47S'

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
     {
     mint: new PublicKey("FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"),
     symbol: 'FLUXB',
     name: 'FluxBot',
      decimals: 1e5,
     baseWager: 10 * 1e5,
    },
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
   //{
   //  mint: new PublicKey("FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"),
   //  symbol: 'FLUXB',
   //  name: 'FluxBot',
   //   decimals: 1e5,
   //  baseWager: 1,
   // },
]
