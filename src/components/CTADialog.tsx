import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface CTADialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ctaType: 'counseling' | 'diagnosis' | null;
}

export function CTADialog({ open, onOpenChange, ctaType }: CTADialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('ご登録ありがとうございます！担当者より24時間以内にご連絡いたします。');
    onOpenChange(false);
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      gender: '',
      message: '',
    });
  };

  if (!ctaType) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {ctaType === 'counseling' 
              ? '無料カウンセリング予約' 
              : '理想の相手診断（3分で完了）'}
          </DialogTitle>
          <DialogDescription>
            {ctaType === 'counseling'
              ? 'まずはお気軽にご相談ください。専任カウンセラーが丁寧に対応いたします。'
              : 'あなたの理想の相手像を診断します。簡単な質問にお答えください。'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">お名前 *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="山田 太郎"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">年齢 *</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
                placeholder="30"
              />
            </div>
            <div className="space-y-2">
              <Label>性別 *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
                className="flex gap-4 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="cursor-pointer">男性</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="cursor-pointer">女性</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">電話番号 *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              placeholder="090-1234-5678"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              {ctaType === 'counseling' 
                ? 'ご希望の日時・ご相談内容（任意）' 
                : 'ご希望の条件など（任意）'}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={ctaType === 'counseling' 
                ? '例：平日の夜、または土日の午後が希望です' 
                : '例：同じ趣味を持つ方、子供が好きな方'}
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-white"
          >
            送信する
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            ご入力いただいた個人情報は、プライバシーポリシーに基づき厳重に管理いたします。
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
