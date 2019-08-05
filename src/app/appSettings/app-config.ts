export interface IAppConfig {
  env: {
      name: string;
  };
  appInsights: {
      instrumentationKey: string;
  };
  logging: {
      console: boolean;
      appInsights: boolean;
  };
  message: string;

  apiServer: {
      metadata: string;
      rules: string;
  };
}
