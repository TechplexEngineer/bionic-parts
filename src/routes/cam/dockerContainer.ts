import { Container } from "@cloudflare/containers";

export class MyContainer extends Container {
	// Port the container listens on (default: 8080)
	defaultPort = 3000;
	// Time before container sleeps due to inactivity (default: 30s)
	sleepAfter = "30s";
	// Environment variables passed to the container
	// envVars = {
	// 	MESSAGE: "I was passed in via the container class!",
	// };

	// Optional lifecycle hooks
	override onStart() {
		console.log("Container successfully started");
	}

	override onStop() {
		console.log("Container successfully shut down");
	}

	override onError(error: unknown) {
		console.log("Container error:", error);
	}
}