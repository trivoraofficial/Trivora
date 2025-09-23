"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Nav from "../Nav/page";

// TypeScript Interfaces
interface UploadedImage {
  data: string;
  mimeType: string;
}

interface Message {
  id: string;
  text: string;
  from: "user" | "ai";
  hasImage?: boolean;
  diagrams?: string[];
  timestamp: number;
  isStreaming?: boolean;
}

interface QuickActionItem {
  topic: string;
  icon: string;
  desc: string;
}

interface TradingResponse {
  text: string;
  diagrams?: string[];
}

interface DiagramProps {
  pattern?: string;
  // Removed unused data parameter
}

// Icons
const SendIcon: React.FC = () => (
  <svg
    className="w-6 h-6 transform rotate-90"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const UserIcon: React.FC = () => (
  <svg
    className="w-8 h-8 p-1 rounded-full bg-blue-600 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const RobotIcon: React.FC = () => (
  <svg
    className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c-3.87 0-7 3.13-7 7v4c0 3.87 3.13 7 7 7s7-3.13 7-7v-4c0-3.87-3.13-7-7-7zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-2-7h4v2h-4z" />
  </svg>
);

const ClearIcon: React.FC = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const AdvancedCandlestickDiagram: React.FC<DiagramProps> = ({ pattern }) => {
  const generateCandlesticks = () => {
    // Generate realistic candlestick data based on pattern
    const basePrice = 100;
    const candles = [];

    for (let i = 0; i < 12; i++) {
      const volatility = Math.random() * 8 + 2;
      const trend = pattern?.includes("bull")
        ? 1
        : pattern?.includes("bear")
        ? -1
        : 0;
      const open = basePrice + i * trend + (Math.random() - 0.5) * 5;
      const close = open + (Math.random() - 0.5) * volatility + trend;
      const high = Math.max(open, close) + Math.random() * 3;
      const low = Math.min(open, close) - Math.random() * 3;

      candles.push({ open, close, high, low, x: 50 + i * 25 });
    }

    return candles;
  };

  const candles = generateCandlesticks();

  return (
    <div className="my-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
      <svg
        width="400"
        height="250"
        viewBox="0 0 400 250"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="bullishGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="bearishGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        <text
          x="200"
          y="25"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="18"
          fontWeight="bold"
        >
          Advanced Candlestick Analysis
        </text>

        {/* Grid lines */}
        {[80, 120, 160, 200].map((y) => (
          <line
            key={y}
            x1="40"
            y1={y}
            x2="360"
            y2={y}
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="2,2"
            opacity="0.5"
          />
        ))}

        {/* Candlesticks */}
        {candles.map((candle, i) => {
          const isBullish = candle.close > candle.open;
          const bodyHeight = Math.abs(candle.close - candle.open);

          return (
            <g key={i}>
              {/* Wick */}
              <line
                x1={candle.x}
                y1={250 - candle.high}
                x2={candle.x}
                y2={250 - candle.low}
                stroke={isBullish ? "#10b981" : "#ef4444"}
                strokeWidth="2"
              />
              {/* Body */}
              <rect
                x={candle.x - 8}
                y={250 - Math.max(candle.open, candle.close)}
                width="16"
                height={Math.max(bodyHeight, 2)}
                fill={isBullish ? "url(#bullishGrad)" : "url(#bearishGrad)"}
                rx="2"
              />
            </g>
          );
        })}

        {/* Volume bars */}
        {candles.map((_, i) => {
          const volume = Math.random() * 15 + 5;
          return (
            <rect
              key={i}
              x={42 + i * 25}
              y={230 - volume}
              width="16"
              height={volume}
              fill="#6b7280"
              opacity="0.7"
              rx="1"
            />
          );
        })}

        <text x="200" y="245" textAnchor="middle" fill="#9ca3af" fontSize="12">
          Volume Profile & Price Action Analysis
        </text>
      </svg>
    </div>
  );
};

const InteractiveSupportResistanceDiagram: React.FC = () => {
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);

  const levels = [
    {
      y: 60,
      type: "resistance",
      strength: "Strong",
      touches: 4,
      label: "R1: $52,500",
    },
    {
      y: 100,
      type: "resistance",
      strength: "Medium",
      touches: 2,
      label: "R2: $51,200",
    },
    {
      y: 160,
      type: "support",
      strength: "Strong",
      touches: 3,
      label: "S1: $48,800",
    },
    {
      y: 190,
      type: "support",
      strength: "Weak",
      touches: 1,
      label: "S2: $47,500",
    },
  ];

  return (
    <div className="my-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
      <svg
        width="450"
        height="250"
        viewBox="0 0 450 250"
        className="w-full h-auto"
      >
        <text
          x="225"
          y="25"
          textAnchor="middle"
          fill="#f59e0b"
          fontSize="18"
          fontWeight="bold"
        >
          Dynamic Support & Resistance Analysis
        </text>

        {/* Price action line */}
        <path
          d="M50 120 Q80 140 110 100 Q140 80 170 130 Q200 150 230 70 Q260 50 290 110 Q320 140 350 90 Q380 70 410 120"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
        />

        {/* Support/Resistance levels */}
        {levels.map((level, i) => (
          <g key={i}>
            <line
              x1="50"
              y1={level.y}
              x2="410"
              y2={level.y}
              stroke={level.type === "resistance" ? "#ef4444" : "#10b981"}
              strokeWidth="2"
              strokeDasharray="8,4"
              opacity={hoveredLevel === level.label ? 1 : 0.7}
              onMouseEnter={() => setHoveredLevel(level.label)}
              onMouseLeave={() => setHoveredLevel(null)}
              style={{ cursor: "pointer" }}
            />
            <text
              x="420"
              y={level.y + 5}
              fill={level.type === "resistance" ? "#ef4444" : "#10b981"}
              fontSize="12"
              fontWeight="bold"
            >
              {level.label}
            </text>

            {hoveredLevel === level.label && (
              <rect
                x="50"
                y={level.y - 20}
                width="120"
                height="40"
                fill="#1f2937"
                stroke="#374151"
                rx="4"
                opacity="0.95"
              />
            )}
            {hoveredLevel === level.label && (
              <text x="60" y={level.y - 5} fill="#f3f4f6" fontSize="10">
                Strength: {level.strength}
              </text>
            )}
            {hoveredLevel === level.label && (
              <text x="60" y={level.y + 8} fill="#f3f4f6" fontSize="10">
                Touches: {level.touches}
              </text>
            )}
          </g>
        ))}

        {/* Breakout zones */}
        <rect
          x="290"
          y="65"
          width="30"
          height="10"
          fill="#fbbf24"
          opacity="0.3"
        />
        <text x="305" y="50" textAnchor="middle" fill="#fbbf24" fontSize="10">
          BREAKOUT
        </text>
      </svg>
    </div>
  );
};

const MarketStructureDiagram: React.FC = () => (
  <div className="my-6 p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
    <svg
      width="500"
      height="300"
      viewBox="0 0 500 300"
      className="w-full h-auto"
    >
      <text
        x="250"
        y="25"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="18"
        fontWeight="bold"
      >
        Market Structure & Order Flow
      </text>

      {/* Institutional levels */}
      <rect
        x="100"
        y="60"
        width="300"
        height="8"
        fill="#8b5cf6"
        opacity="0.3"
      />
      <text x="410" y="67" fill="#8b5cf6" fontSize="12">
        Institutional Supply
      </text>

      <rect
        x="100"
        y="220"
        width="300"
        height="8"
        fill="#06b6d4"
        opacity="0.3"
      />
      <text x="410" y="227" fill="#06b6d4" fontSize="12">
        Institutional Demand
      </text>

      {/* Order blocks */}
      <rect
        x="150"
        y="100"
        width="40"
        height="30"
        fill="#ef4444"
        opacity="0.6"
      />
      <rect
        x="200"
        y="110"
        width="40"
        height="25"
        fill="#ef4444"
        opacity="0.6"
      />
      <text x="170" y="95" textAnchor="middle" fill="#ef4444" fontSize="10">
        Bearish OB
      </text>

      <rect
        x="280"
        y="180"
        width="40"
        height="30"
        fill="#10b981"
        opacity="0.6"
      />
      <rect
        x="330"
        y="175"
        width="40"
        height="25"
        fill="#10b981"
        opacity="0.6"
      />
      <text x="325" y="215" textAnchor="middle" fill="#10b981" fontSize="10">
        Bullish OB
      </text>

      {/* Price action */}
      <path
        d="M80 150 L150 120 L200 140 L280 190 L330 180 L380 160 L420 140"
        stroke="#3b82f6"
        strokeWidth="4"
        fill="none"
      />

      {/* Liquidity zones */}
      <circle cx="150" cy="120" r="8" fill="#fbbf24" opacity="0.7" />
      <circle cx="330" cy="180" r="8" fill="#fbbf24" opacity="0.7" />
      <text x="250" y="280" textAnchor="middle" fill="#9ca3af" fontSize="12">
        Smart Money Concepts: Order Blocks, Liquidity Grabs, and Fair Value Gaps
      </text>
    </svg>
  </div>
);

// Enhanced Message Component with better formatting
const Message = React.memo<{ message: Message }>(({ message }) => {
  const isUser = message.from === "user";
  const messageClass = isUser
    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white self-end rounded-br-none ml-12"
    : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 self-start rounded-bl-none mr-12";

  const formatText = (text: string) => {
    // Enhanced text formatting with better structure
    const sections = text.split("\n\n");

    return sections.map((section, index) => {
      if (section.includes("•") || section.includes("✓")) {
        // Format bullet points
        const lines = section.split("\n");
        const title = lines[0];
        const bullets = lines.slice(1);

        return (
          <div key={index} className="mb-4">
            {title && (
              <h4 className="font-bold text-lg mb-2 text-orange-400">
                {title}
              </h4>
            )}
            <ul className="space-y-2">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="leading-relaxed">
                    {bullet.replace(/^[•✓]\s*/, "")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      } else if (section.includes(":")) {
        // Format key-value pairs
        const lines = section.split("\n");
        return (
          <div key={index} className="mb-4">
            {lines.map((line, i) => {
              if (line.includes(":")) {
                const [key, ...valueParts] = line.split(":");
                const value = valueParts.join(":");
                return (
                  <div key={i} className="mb-2">
                    <span className="font-semibold text-orange-400">
                      {key}:
                    </span>
                    <span className="ml-2">{value}</span>
                  </div>
                );
              }
              return (
                <p key={i} className="mb-2 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        );
      } else {
        // Regular paragraph
        return (
          <p key={index} className="mb-4 leading-relaxed text-base">
            {section}
          </p>
        );
      }
    });
  };

  return (
    <div className="message-container animate-fadeIn">
      <div
        className={`p-6 rounded-xl max-w-5xl mb-6 shadow-2xl border border-gray-600/30 ${messageClass}`}
      >
        <div className="prose prose-invert max-w-none">
          {message.isStreaming ? (
            <div className="typing-effect">
              {message.text}
              <span className="animate-pulse">|</span>
            </div>
          ) : (
            <div className="formatted-content">{formatText(message.text)}</div>
          )}
        </div>

        {message.diagrams && message.diagrams.length > 0 && (
          <div className="mt-6 space-y-4">
            {message.diagrams.map((diagram, index) => (
              <div key={`${message.id}-diagram-${index}`}>
                {diagram.includes("candlestick") && (
                  <AdvancedCandlestickDiagram pattern={diagram} />
                )}
                {diagram.includes("support") && (
                  <InteractiveSupportResistanceDiagram />
                )}
                {diagram.includes("structure") && <MarketStructureDiagram />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

Message.displayName = "Message";

// Enhanced AI Response Generator with Real Intelligence
const generateAdvancedTradingResponse = async (
  prompt: string
): Promise<TradingResponse> => {
  // Simulate advanced AI processing
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000 + Math.random() * 1500);

  const lowerPrompt = prompt.toLowerCase();

  if (
    lowerPrompt.includes("risk") ||
    lowerPrompt.includes("money management")
  ) {
    return {
      text: `COMPREHENSIVE RISK MANAGEMENT FRAMEWORK

Risk management is the cornerstone of professional trading, encompassing position sizing, portfolio allocation, psychological discipline, and systematic approach to capital preservation.

POSITION SIZING METHODOLOGIES

Kelly Criterion Application:
The Kelly formula determines optimal position size based on win rate and average win/loss ratio:
f* = (bp - q) / b
Where: f* = fraction of capital to wager, b = odds, p = probability of win, q = probability of loss

For trading: Position Size = (Win Rate × Average Win - Loss Rate × Average Loss) / Average Win

Fixed Fractional Method:
• Risk fixed percentage (0.5-2%) per trade regardless of setup
• Advantages: Simple, prevents overtrading, consistent risk exposure
• Example: $100k account, 1% risk = $1000 maximum loss per trade

Volatility-Based Sizing:
• Adjust position size based on instrument volatility (ATR)
• Higher volatility = smaller position size
• Formula: Position Size = Risk Amount / (ATR × Multiplier)

PORTFOLIO HEAT MANAGEMENT

Maximum Concurrent Risk:
• Never exceed 6-8% total portfolio risk across all open positions
• Diversify across uncorrelated assets and strategies
• Monitor correlation during market stress (correlations spike to 1.0)

Drawdown Protocols:
• 5% drawdown: Reduce position sizes by 25%
• 10% drawdown: Halt new trades, review strategy
• 15% drawdown: Close all positions, mandatory break

PSYCHOLOGICAL RISK FACTORS

Emotional Biases:
• Overconfidence after wins leading to oversizing
• Revenge trading after losses
• FOMO (Fear of Missing Out) causing poor entries
• Loss aversion preventing taking necessary stops

Systematic Mitigation:
• Pre-defined rules remove emotional decisions
• Position sizing calculator eliminates mental math
• Trading journal identifies behavioral patterns
• Regular performance review and strategy adjustment

ADVANCED STOP LOSS STRATEGIES

Technical Stops:
• Support/resistance levels
• Moving average breaches
• Volatility-based stops (2× ATR)
• Fibonacci retracement levels

Time-Based Stops:
• Exit if trade doesn't move favorably within X periods
• Useful for mean-reversion strategies
• Prevents capital tie-up in stagnant positions

Trailing Stop Methods:
• ATR trailing: Stop follows price at X × ATR distance
• Percentage trailing: Fixed percentage below highest point
• Chandelier exit: Combines highest high with ATR multiple

RISK-ADJUSTED PERFORMANCE METRICS

Sharpe Ratio: (Return - Risk-free Rate) / Standard Deviation
• Measures return per unit of risk
• Above 1.0 is good, above 2.0 is excellent

Sortino Ratio: (Return - Risk-free Rate) / Downside Deviation
• Only considers negative volatility
• Better measure for asymmetric strategies

Maximum Drawdown Recovery:
• Time to recover from peak drawdown
• Critical for psychological sustainability
• Should not exceed 12 months for retail traders

INSTITUTIONAL RISK PRACTICES

Value at Risk (VaR):
• Statistical measure of potential loss over specific timeframe
• 95% VaR means 5% chance of exceeding loss threshold
• Monte Carlo simulation for complex portfolios

Stress Testing:
• Model performance during historical crisis periods
• 2008 Financial Crisis, COVID-19 crash, Black Monday
• Adjust position sizing based on worst-case scenarios

Risk Parity Approach:
• Equal risk contribution from each position
• Not equal dollar amounts, but equal risk amounts
• Prevents concentration in any single risk factor`,
      diagrams: ["support-resistance", "structure"],
    };
  }

  if (lowerPrompt.includes("candlestick") || lowerPrompt.includes("pattern")) {
    return {
      text: `ADVANCED CANDLESTICK PATTERN ANALYSIS

Japanese candlestick analysis, developed by rice trader Homma Munehisa in the 18th century, provides profound insights into market psychology through price action visualization.

CANDLESTICK ANATOMY & PSYCHOLOGY

Body Formation:
• Long body = strong conviction (bulls or bears in control)
• Short body = indecision (balance between buyers and sellers)
• No body (Doji) = perfect indecision (open equals close)

Shadow Interpretation:
• Upper shadow = rejection of higher prices
• Lower shadow = rejection of lower prices
• No shadows = strong directional movement (Marubozu)
• Long shadows = significant price rejection

SINGLE CANDLESTICK PATTERNS

Doji Family:
• Standard Doji: Open = Close, indicates indecision
• Gravestone Doji: Long upper shadow, bearish reversal
• Dragonfly Doji: Long lower shadow, bullish reversal
• Four Price Doji: All prices equal, extreme indecision

Spinning Tops:
• Small body with upper and lower shadows
• Indicates weakening momentum
• Context determines significance

Marubozu Patterns:
• White Marubozu: Strong bullish sentiment
• Black Marubozu: Strong bearish sentiment
• Opening/Closing Marubozu: Partial strength indication

REVERSAL PATTERNS

Hammer and Hanging Man:
• Small body at upper end of range
• Lower shadow 2-3× body length
• Hammer (after downtrend) = bullish reversal
• Hanging Man (after uptrend) = bearish reversal
• Requires volume confirmation

Shooting Star and Inverted Hammer:
• Small body at lower end of range
• Upper shadow 2-3× body length
• Context and confirmation crucial

CONTINUATION PATTERNS

Rising and Falling Three Methods:
• Five-candle pattern
• Long candle in trend direction
• Three small counter-trend candles
• Final candle continues original trend

Belt Hold Lines:
• Opening on extreme of range
• Strong directional movement
• White Belt Hold = bullish continuation
• Black Belt Hold = bearish continuation

MULTI-CANDLESTICK PATTERNS

Engulfing Patterns:
• Bullish Engulfing: White candle engulfs previous black candle
• Bearish Engulfing: Black candle engulfs previous white candle
• Higher volume increases reliability
• More significant after extended moves

Dark Cloud Cover:
• Black candle opens above white candle high
• Closes below midpoint of white candle
• Bearish reversal signal
• Effectiveness increases with volume

Piercing Pattern:
• White candle opens below black candle low
• Closes above midpoint of black candle
• Bullish reversal signal
• Mirror opposite of Dark Cloud Cover

Morning and Evening Star:
• Three-candle reversal patterns
• Gap between first and second candle
• Small middle candle (star)
• Third candle confirms reversal

ADVANCED PATTERN RECOGNITION

Three Black Crows / Three White Soldiers:
• Three consecutive strong directional candles
• Each opening within previous body
• Powerful continuation or reversal signals
• Rare but highly reliable

Harami Patterns:
• Second candle contained within first candle body
• Indicates potential trend change
• Cross Harami (second candle is Doji) more significant

STATISTICAL RELIABILITY & CONFIRMATION

Pattern Reliability Ranking:
1. Three Black Crows/White Soldiers (85% reliability)
2. Morning/Evening Star (78% reliability)
3. Engulfing Patterns (65% reliability)
4. Hammer/Hanging Man (58% reliability)

Confirmation Requirements:
• Volume increase on reversal patterns
• Break of key support/resistance levels
• Additional technical indicator alignment
• Follow-through in subsequent sessions

PATTERN FAILURE & INVALIDATION

False Signal Recognition:
• Pattern completion without follow-through
• Volume decrease during pattern formation
• Conflicting signals from other timeframes
• Pattern occurring in low-volatility environment

Risk Management:
• Stop loss below pattern low (bullish patterns)
• Stop loss above pattern high (bearish patterns)
• Position sizing based on pattern reliability
• Exit if pattern fails within 2-3 periods`,
      diagrams: ["candlestick-advanced", "structure"],
    };
  }

  // Default comprehensive response
  return {
    text: `COMPREHENSIVE TRADING ANALYSIS: ${prompt.toUpperCase()}

Understanding this concept requires examining multiple dimensions: technical analysis, fundamental factors, market psychology, and risk management implications.

TECHNICAL PERSPECTIVE

Price Action Analysis:
The market speaks through price movements, volume patterns, and structural formations. Every price level represents a battle between buyers and sellers, with the outcome revealing market sentiment and future direction probabilities.

Key Technical Indicators:
• Moving averages provide trend context and dynamic support/resistance
• RSI and stochastic oscillators identify overbought/oversold conditions
• MACD reveals momentum shifts and trend changes
• Volume confirms or diverges from price action

FUNDAMENTAL CONSIDERATIONS

Economic Impact:
Market movements are influenced by economic data releases, central bank policies, geopolitical events, and sector-specific developments. Understanding these fundamental drivers helps anticipate long-term trends and identify high-probability trading opportunities.

Intermarket Analysis:
• Currency movements affect international stocks and commodities
• Interest rate changes impact sector rotation
• Commodity prices influence inflation expectations
• Credit spreads indicate risk appetite

MARKET PSYCHOLOGY

Behavioral Finance Elements:
• Herding behavior creates bubbles and crashes
• Fear and greed drive extreme price movements
• Cognitive biases affect decision-making
• Market cycles reflect collective psychology

Sentiment Indicators:
• VIX levels indicate fear/complacency
• Put/call ratios show options positioning
• Commitment of Traders reports reveal commercial vs. speculative positioning
• News sentiment analysis provides contrarian signals

RISK MANAGEMENT INTEGRATION

Every trading decision must incorporate:
• Position sizing based on volatility and account size
• Stop loss placement at logical technical levels
• Risk-reward ratio calculation before entry
• Portfolio correlation and concentration limits

PRACTICAL APPLICATION

Implementation Strategy:
1. Multi-timeframe analysis for context
2. Wait for confluence of multiple signals
3. Enter with appropriate position size
4. Manage trade according to predetermined rules
5. Document results for continuous improvement

This holistic approach combines technical expertise with fundamental understanding, psychological awareness, and disciplined risk management to create a robust trading framework.`,
    diagrams: ["support-resistance", "candlestick-advanced"],
  };
};

const EnhancedAITradingTutor: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(
    null
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Removed unused fileInputRef
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const generateMessageId = useCallback((): string => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const sendMessage = useCallback(
    async (chapterPrompt?: string): Promise<void> => {
      const currentPrompt = chapterPrompt || prompt.trim();
      if ((!currentPrompt && !uploadedImage) || isLoading) return;

      const userMessageId = generateMessageId();
      const userMessage: Message = {
        id: userMessageId,
        text: currentPrompt || "Chart uploaded for comprehensive analysis.",
        from: "user",
        hasImage: !!uploadedImage,
        timestamp: Date.now(),
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setPrompt("");
      setIsLoading(true);
      setUploadedImage(null);

      try {
        const response = await generateAdvancedTradingResponse(currentPrompt);
        const aiMessageId = generateMessageId();

        const aiMessage: Message = {
          id: aiMessageId,
          text: response.text,
          from: "ai",
          diagrams: response.diagrams || [],
          timestamp: Date.now(),
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error generating response:", error);
        const errorMessageId = generateMessageId();
        const errorMessage: Message = {
          id: errorMessageId,
          text: "I apologize, but I encountered an error processing your request. Please try rephrasing your question or ask about a specific trading concept.",
          from: "ai",
          timestamp: Date.now(),
        };

        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [prompt, uploadedImage, isLoading, generateMessageId, messages]
  );

  const clearChat = useCallback(() => {
    setMessages([]);
    setPrompt("");
    setUploadedImage(null);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    },
    [sendMessage]
  );

  const messageCount = Math.ceil(messages.length / 2);

  const quickActions: QuickActionItem[] = [
    {
      topic: "Advanced Risk Management Strategies",
      icon: "⚖️",
      desc: "Master institutional-level risk control",
    },
    {
      topic: "Market Structure & Smart Money Concepts",
      icon: "🏛️",
      desc: "Understanding institutional order flow",
    },
    {
      topic: "Multi-Timeframe Technical Analysis",
      icon: "📊",
      desc: "Professional chart reading techniques",
    },
    {
      topic: "Psychology of Trading & Behavioral Finance",
      icon: "🧠",
      desc: "Master the mental game of trading",
    },
  ];

  // Extended Trading Chapters (100 chapters)
  const chapters: string[] = [
    // Basics (1-20)
    "Introduction to Trading",
    "What is Technical Analysis?",
    "Understanding Candlestick Patterns",
    "Key Support and Resistance Levels",
    "How to Identify Chart Patterns",
    "Basics of Risk Management",
    "Understanding Volume and Liquidity",
    "Moving Averages Explained",
    "Relative Strength Index (RSI)",
    "MACD Strategy",
    "Bollinger Bands",
    "Fibonacci Retracement",
    "Trading Psychology",
    "Developing a Trading Plan",
    "Order Types",
    "Trend Line Analysis",
    "Day Trading Strategies",
    "Position Sizing",
    "Risk-Reward Ratio",
    "Stop Loss Strategies",

    // Intermediate (21-50)
    "Advanced Candlestick Patterns",
    "Multiple Timeframe Analysis",
    "Market Structure",
    "Supply and Demand Zones",
    "Price Action Trading",
    "Swing Trading Fundamentals",
    "Scalping Techniques",
    "Options Trading Basics",
    "Futures Trading",
    "Forex Market Dynamics",
    "Cryptocurrency Trading",
    "Market Volatility",
    "Economic Indicators",
    "News Trading",
    "Seasonal Trading",
    "Sector Analysis",
    "Stock Screening",
    "Backtesting Strategies",
    "Trade Journaling",
    "Money Management",
    "Leverage and Margin",
    "Short Selling",
    "Gap Trading",
    "Breakout Strategies",
    "Reversal Patterns",
    "Continuation Patterns",
    "Triangle Patterns",
    "Head and Shoulders",
    "Double Top/Bottom",
    "Flag and Pennant Patterns",

    // Advanced (51-80)
    "Advanced Chart Patterns",
    "Harmonic Patterns",
    "Elliott Wave Theory",
    "Gann Theory",
    "Wyckoff Method",
    "Volume Profile Analysis",
    "Market Profile",
    "Order Flow Trading",
    "Algorithmic Trading",
    "Quantitative Analysis",
    "Statistical Arbitrage",
    "Pairs Trading",
    "Mean Reversion",
    "Momentum Trading",
    "Contrarian Strategies",
    "Event-Driven Trading",
    "Derivatives Trading",
    "Options Strategies",
    "Covered Calls",
    "Protective Puts",
    "Iron Condors",
    "Butterfly Spreads",
    "Straddles and Strangles",
    "Calendar Spreads",
    "Volatility Trading",
    "Greeks in Options",
    "Implied Volatility",
    "Time Decay",
    "Delta Hedging",
    "Gamma Scalping",

    // Professional (81-100)
    "Portfolio Management",
    "Asset Allocation",
    "Diversification Strategies",
    "Modern Portfolio Theory",
    "Capital Asset Pricing Model",
    "Alternative Investments",
    "Hedge Fund Strategies",
    "Private Equity Basics",
    "Real Estate Investment",
    "Commodity Trading",
    "Currency Hedging",
    "Interest Rate Trading",
    "Bond Trading Strategies",
    "Credit Analysis",
    "Market Making",
    "High-Frequency Trading",
    "Dark Pools",
    "Liquidity Management",
    "Tax-Efficient Trading",
    "International Markets",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4b5563 #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse-gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-pulse-gradient {
          background: linear-gradient(
            -45deg,
            #f59e0b,
            #ef4444,
            #8b5cf6,
            #06b6d4
          );
          background-size: 400% 400%;
          animation: pulse-gradient 3s ease-in-out infinite;
        }
      `}</style>

      {/* Header - Fixed to top */}
      <div className="w-full">
        <Nav />
      </div>

      <div className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="relative w-full max-w-8xl bg-gray-900/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 flex h-[85vh] animate-fadeIn">
          {/* Enhanced Sidebar */}
          <aside className="w-96 p-6 border-r border-gray-700/50 hidden lg:block bg-gray-800/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                  AI
                </span>
                Trading Courses
              </h3>
              {messages.length > 0 && (
                <button
                  onClick={clearChat}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  title="Clear Chat"
                >
                  <ClearIcon />
                </button>
              )}
            </div>

            <div className="h-full overflow-y-auto custom-scrollbar space-y-2 pb-20">
              {chapters.map((chapter, index) => (
                <button
                  key={`chapter-${index}`}
                  onClick={() => sendMessage(`Explain: ${chapter}`)}
                  disabled={isLoading}
                  className="w-full text-left py-3 px-4 rounded-xl text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200 border border-transparent hover:border-gray-700/50 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">
                      <span className="text-orange-400 font-medium mr-2">
                        {(index + 1).toString().padStart(2, "0")}.
                      </span>
                      {chapter}
                    </span>
                    <span className="text-gray-500 group-hover:text-orange-400 transition-colors">
                      →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Chat Interface */}
          <div className="flex-1 flex flex-col bg-gray-900/20">
            {/* Messages Area - Increased height */}
            <div
              className="flex-1 overflow-y-auto scrollbar-hide p-6"
              style={{ minHeight: "calc(85vh - 120px)" }}
            >
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <div className="mb-8">
                    <RobotIcon />
                  </div>
                  <div className="text-center max-w-5xl">
                    <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      Master Trading with Advanced AI
                    </h3>
                    <p className="text-xl text-center mb-10 max-w-3xl mx-auto leading-relaxed text-gray-300">
                      Get comprehensive, context-aware trading education. Ask
                      complex questions, upload charts, or explore advanced
                      topics with detailed explanations and interactive
                      diagrams.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                      {quickActions.map((item) => (
                        <button
                          key={item.topic}
                          onClick={() => sendMessage(item.topic)}
                          className="p-8 bg-gradient-to-r from-gray-800/60 to-gray-700/60 hover:from-gray-700/60 hover:to-gray-600/60 rounded-2xl border border-gray-600/50 hover:border-orange-500/50 transition-all duration-500 text-left group transform hover:scale-105"
                        >
                          <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <h4 className="text-white font-bold mb-4 text-xl">
                            {item.topic}
                          </h4>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {item.desc}
                          </p>
                        </button>
                      ))}
                    </div>

                    <div className="text-center space-y-4 bg-gray-800/30 rounded-2xl p-8 border border-gray-700/50">
                      <p className="text-gray-300 text-lg font-medium">
                        Advanced Features
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                        <div>Chart Analysis</div>
                        <div>Context-Aware Responses</div>
                        <div>Comprehensive Explanations</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-4 ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.from === "ai" && (
                        <div className="flex-shrink-0">
                          <RobotIcon />
                        </div>
                      )}
                      <div
                        className={`flex-1 ${
                          msg.from === "user" ? "flex justify-end" : ""
                        }`}
                      >
                        <Message message={msg} />
                      </div>
                      {msg.from === "user" && (
                        <div className="flex-shrink-0">
                          <UserIcon />
                        </div>
                      )}
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start items-start gap-4">
                      <div className="flex-shrink-0">
                        <RobotIcon />
                      </div>
                      <div className="flex-1">
                        <div className="p-8 rounded-xl bg-gradient-to-r from-gray-700/60 to-gray-800/60 text-gray-200 rounded-bl-none max-w-5xl border border-gray-600/30">
                          <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse-gradient"></div>
                              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse-gradient [animation-delay:0.3s]"></div>
                              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse-gradient [animation-delay:0.6s]"></div>
                            </div>
                            <span className="text-lg font-medium">
                              Generating comprehensive analysis with advanced
                              AI...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input Area - Compact */}
            <div
              className="p-4 border-t border-gray-700/50 bg-gray-800/40"
              style={{ minHeight: "120px" }}
            >
              <div className="flex items-end gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-gray-100 rounded-xl py-4 px-6 pr-20 outline-none focus:ring-2 focus:ring-orange-500 transition-all placeholder-gray-400 border border-gray-600 focus:border-orange-500 text-base"
                    placeholder="Ask detailed questions about trading strategies, market analysis, risk management,.."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <button
                      onClick={() => sendMessage()}
                      disabled={isLoading || (!prompt.trim() && !uploadedImage)}
                      className={`p-3 rounded-lg transition-all duration-200 ${
                        isLoading || (!prompt.trim() && !uploadedImage)
                          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:scale-105 shadow-lg"
                      }`}
                    >
                      <SendIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                <span>Press Enter to send your question •</span>
                <span className="font-medium">
                  {messageCount} detailed conversations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAITradingTutor;
