export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
          is_active?: boolean;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          bio: string | null;
          company: string | null;
          website: string | null;
          phone: string | null;
          timezone: string | null;
          theme: 'light' | 'dark' | 'system';
          language: string;
          notifications_enabled: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          bio?: string | null;
          company?: string | null;
          website?: string | null;
          phone?: string | null;
          timezone?: string | null;
          theme?: 'light' | 'dark' | 'system';
          language?: string;
          notifications_enabled?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          bio?: string | null;
          company?: string | null;
          website?: string | null;
          phone?: string | null;
          timezone?: string | null;
          theme?: 'light' | 'dark' | 'system';
          language?: string;
          notifications_enabled?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          description: string | null;
          business_name: string;
          industry: string;
          slogan: string | null;
          is_archived: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          description?: string | null;
          business_name: string;
          industry: string;
          slogan?: string | null;
          is_archived?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          description?: string | null;
          business_name?: string;
          industry?: string;
          slogan?: string | null;
          is_archived?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      generated_logos: {
        Row: {
          id: string;
          project_id: string;
          user_id: string;
          prompt: string;
          style: 'minimalist' | 'modern' | 'luxury' | 'tech' | 'vintage' | 'corporate';
          image_url: string;
          svg_url: string | null;
          colors: string[];
          is_favorite: boolean;
          download_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          project_id: string;
          user_id: string;
          prompt: string;
          style: 'minimalist' | 'modern' | 'luxury' | 'tech' | 'vintage' | 'corporate';
          image_url: string;
          svg_url?: string | null;
          colors?: string[];
          is_favorite?: boolean;
          download_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          project_id?: string;
          user_id?: string;
          prompt?: string;
          style?: 'minimalist' | 'modern' | 'luxury' | 'tech' | 'vintage' | 'corporate';
          image_url?: string;
          svg_url?: string | null;
          colors?: string[];
          is_favorite?: boolean;
          download_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      logo_history: {
        Row: {
          id: string;
          logo_id: string;
          user_id: string;
          action: 'created' | 'updated' | 'downloaded' | 'favorited' | 'unfavorited';
          changes: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          logo_id: string;
          user_id: string;
          action: 'created' | 'updated' | 'downloaded' | 'favorited' | 'unfavorited';
          changes?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          logo_id?: string;
          user_id?: string;
          action?: 'created' | 'updated' | 'downloaded' | 'favorited' | 'unfavorited';
          changes?: Json | null;
          created_at?: string;
        };
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          logo_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          logo_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          logo_id?: string;
          created_at?: string;
        };
      };
      downloads: {
        Row: {
          id: string;
          user_id: string;
          logo_id: string;
          format: 'png' | 'svg' | 'pdf' | 'jpg';
          size: string;
          file_path: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          logo_id: string;
          format: 'png' | 'svg' | 'pdf' | 'jpg';
          size: string;
          file_path: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          logo_id?: string;
          format?: 'png' | 'svg' | 'pdf' | 'jpg';
          size?: string;
          file_path?: string;
          created_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan: 'free' | 'starter' | 'professional' | 'enterprise';
          status: 'active' | 'inactive' | 'canceled' | 'expired';
          started_at: string;
          expires_at: string | null;
          stripe_subscription_id: string | null;
          auto_renew: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan: 'free' | 'starter' | 'professional' | 'enterprise';
          status: 'active' | 'inactive' | 'canceled' | 'expired';
          started_at: string;
          expires_at?: string | null;
          stripe_subscription_id?: string | null;
          auto_renew?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan?: 'free' | 'starter' | 'professional' | 'enterprise';
          status?: 'active' | 'inactive' | 'canceled' | 'expired';
          started_at?: string;
          expires_at?: string | null;
          stripe_subscription_id?: string | null;
          auto_renew?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      credits: {
        Row: {
          id: string;
          user_id: string;
          balance: number;
          total_earned: number;
          total_used: number;
          last_reset_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          balance?: number;
          total_earned?: number;
          total_used?: number;
          last_reset_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          balance?: number;
          total_earned?: number;
          total_used?: number;
          last_reset_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      credit_transactions: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          type: 'earned' | 'used' | 'refunded' | 'purchased' | 'bonus';
          description: string;
          reference_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          amount: number;
          type: 'earned' | 'used' | 'refunded' | 'purchased' | 'bonus';
          description: string;
          reference_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          amount?: number;
          type?: 'earned' | 'used' | 'refunded' | 'purchased' | 'bonus';
          description?: string;
          reference_id?: string | null;
          created_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          currency: string;
          status: 'pending' | 'completed' | 'failed' | 'refunded';
          payment_method: string;
          stripe_payment_id: string | null;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          amount: number;
          currency: string;
          status: 'pending' | 'completed' | 'failed' | 'refunded';
          payment_method: string;
          stripe_payment_id?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          amount?: number;
          currency?: string;
          status?: 'pending' | 'completed' | 'failed' | 'refunded';
          payment_method?: string;
          stripe_payment_id?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      prompts: {
        Row: {
          id: string;
          user_id: string | null;
          category: string;
          content: string;
          usage_count: number;
          is_favorite: boolean;
          tags: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          category: string;
          content: string;
          usage_count?: number;
          is_favorite?: boolean;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          category?: string;
          content?: string;
          usage_count?: number;
          is_favorite?: boolean;
          tags?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      user_settings: {
        Row: {
          id: string;
          user_id: string;
          email_notifications: boolean;
          marketing_emails: boolean;
          sms_notifications: boolean;
          two_factor_enabled: boolean;
          default_export_format: 'png' | 'svg' | 'pdf' | 'jpg';
          default_style: string;
          auto_save: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          email_notifications?: boolean;
          marketing_emails?: boolean;
          sms_notifications?: boolean;
          two_factor_enabled?: boolean;
          default_export_format?: 'png' | 'svg' | 'pdf' | 'jpg';
          default_style?: string;
          auto_save?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          email_notifications?: boolean;
          marketing_emails?: boolean;
          sms_notifications?: boolean;
          two_factor_enabled?: boolean;
          default_export_format?: 'png' | 'svg' | 'pdf' | 'jpg';
          default_style?: string;
          auto_save?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          resource: string;
          resource_id: string | null;
          changes: Json | null;
          ip_address: string | null;
          user_agent: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          action: string;
          resource: string;
          resource_id?: string | null;
          changes?: Json | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          action?: string;
          resource?: string;
          resource_id?: string | null;
          changes?: Json | null;
          ip_address?: string | null;
          user_agent?: string | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
